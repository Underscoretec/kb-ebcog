/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import mongoose from 'mongoose';
import CourseModel from "@/__server__/courses/model";
import CartModel from "@/__server__/cart/model";
import messages from "@/__server__/utils/message.json";
import { logger } from "@/__server__/utils/logger";
import errorResponse from "@/__server__/utils/errorResponse";

// Define a TypeScript interface for the Cart Item
interface CartItem {
    course: mongoose.Types.ObjectId; // Reference to the Course schema
    quantity: number; // Quantity of the course
  }


const addProductToCart = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info(`[CART-001] Add product to Cart api call`);
    const { courseId, quantity, userId, } = req.body;
    try {
        const courseFound = await CourseModel.findById(courseId);
        if (!courseFound) {
            return res.status(404).json({
                message: messages["COURSE_NOT_FOUND"],
                error: false,
                code: "COURSE_NOT_FOUND",
            })
        }
        const cart = await CartModel.findOne({ createdBy: userId });
        const itemObj = {
            course: courseId,
            quantity: quantity
        }
        if (cart) {
            const index = await cart?.items?.findIndex((item: CartItem) => item?.course?.toString() === courseId?.toString());
            if (index > -1) {
                if (quantity === 0) {
                    cart.items.splice(index, 1);
                } else {
                    cart.items[index].quantity = quantity;
                }   
            } else {
                cart.items.push(itemObj);
            }
            cart.updatedDate = Date.now()
            const result = await cart.save();

            return res.status(200).json({
                message: messages["CART_UPDATED"],
                error: false,
                code: "CART_UPDATED",
                result: result
            })
        } else {
            const newCart = new CartModel({
                createdBy: userId,
                items: [itemObj],
            })
            const result = await newCart.save();
            return res.status(200).json({
                message: messages["CART_CREATED"],
                error: false,
                code: "CART_CREATED",
                result: result
            })
        }

    } catch (error) {
        logger.error(error, "[CART-001] Error add product in Cart")
        return res.status(500).json(errorResponse(error));
    }
}

const getCartByUserId = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[CART-002] Cart items get by userId API call");
    const { userId } = req?.query;
    try {
        // const currency = req.query.currency === "USD" ? "DOLLAR" : req.query.currency
        const cart = await CartModel.findOne({ createdBy: userId }).populate('items.course').exec();

        if (!cart) {
            return res.status(200).json({
                message: messages["CART_NOT_FOUND"],
                error: true,
                code: "CART_NOT_FOUND",
            });
        }

        return res.status(200).json({
            message: messages["CART_FOUND"],
            error: false,
            code: "CART_FOUND",
            result: cart
        });

    } catch (error) {
        logger.error(error, `[Cart 002] Cart failed to get by userId ${userId}`);
        return errorResponse(error);
    }
};

const itemRemoveFromCart = async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info("[CART-003] Cart items remove by userId API call");
    const { userId, courseId } = req.query;
    try {
        const cart = await CartModel.findOne({ createdBy: userId });
        if (cart) {
            const index = await cart?.items?.findIndex((item: any) => item.course.toString() === courseId?.toString())

            if (index > -1) {
                cart.items.splice(index, 1);
            } else {
                return res.status(404).json({
                    message: messages["COURSE_NOT_FOUND"],
                    error: true,
                    code: "COURSE_NOT_FOUND",
                })
            }
        } else {
            return res.status(200).json({
                message: messages["CART_NOT_FOUND"],
                error: true,
                code: "CART_NOT_FOUND",
            });
        }
        const updateCart = await cart.save();
        return res.status(200).json({
            message: messages["CART_UPDATED"],
            error: false,
            code: "CART_UPDATED",
            result: updateCart
        })
    } catch (error) {
        logger.error(error, `[Cart 003] Cart failed to remove course by userId ${userId}`)
        errorResponse(error);
    }
};


export default {
    addProductToCart,
    getCartByUserId,
    itemRemoveFromCart
}