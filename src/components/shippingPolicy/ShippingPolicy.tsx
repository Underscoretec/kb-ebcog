const ShippingPolicy = () => {

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            {/* Header Section */}
            <header className="bg-gray-400 text-white p-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Shipping policy</h1>
                </div>
            </header>

            {/* Main Content Section */}
            <main className="container mx-auto p-6">
                {/* Introduction */}
                <section className="mb-8">
                    {/* <h2 className="text-2xl md:text-3xl font-bold mb-4"></h2> */}
                    <p className="text-lg leading-relaxed mb-4">
                    All orders are processed within 20-30 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
                    </p>
                </section>

                {/* Domestic Shipping Rates and Estimates Section */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Domestic Shipping Rates and Estimates
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                    Shipping charges for your order will be calculated and displayed at checkout.
                    </p>
                </section>

                {/* Local delivery */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Local delivery</h2>
                    <p className="text-lg leading-relaxed mb-4">
                    We do not offer Local delivery 
                    </p>
                </section>

                {/* International Shipping */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">International Shipping</h2>
                    <p className="text-lg leading-relaxed">
                    We offer international shipping to the following countries where FedEx and UPS and Indian postal services are available
                    </p>
                    <p className="text-lg leading-relaxed">
                    Shipping charges for your order will be calculated and displayed at checkout.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                    Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. KnowledgeBridege International  is not responsible for these charges if they are applied and are your responsibility as the customer.
                    </p>
                </section>
            </main>
        </div>
    );
}

export default ShippingPolicy;

