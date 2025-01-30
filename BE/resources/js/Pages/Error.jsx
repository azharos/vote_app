import React from "react";
import { Button, LayoutFE } from "../Components/index";
import { router } from "@inertiajs/react";

export default function Error({ Konfigurasi }) {
    return (
        <LayoutFE logo={Konfigurasi.logo}>
            <section className="p-4">
                <div className="p-5 md:px-0 md:py-40 text-center">
                    <h4
                        className="font-primary font-bold mb-0 text-primary"
                        style={{ fontSize: "8em" }}
                    >
                        404
                    </h4>
                    <p className="text-primary">This page does not exist</p>
                    <p className="text-primary mb-5">
                        Sorry, we couldn’t find the page you’re looking for.
                    </p>
                    <Button title="Go Home" onClick={() => router.get("/")} />
                </div>
            </section>
        </LayoutFE>
    );
}
