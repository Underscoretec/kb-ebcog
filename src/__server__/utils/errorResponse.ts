export default async function errorResponse(error: any) {
    return ({
        status: error?.code || 500,
        error: true,
        code: "INTERNAL_SERVER_ERROR",
        errResult: error,
        message: error.message || "Internal Server Error"
    })
}