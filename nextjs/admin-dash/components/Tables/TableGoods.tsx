"use client";
import { GOODS } from "@/types/goods";
import React from "react";
import Image from "next/image";

const TableGoods = () => {
    const [products, setProducts] = React.useState<GOODS[]>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:8000/');
            if (!res.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await res.json();
            const goodsData = data.mysql_data;

            setProducts(goodsData);
        };

        fetchData();
    }, []);

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                Mercadorias
            </h4>
            <div className="flex flex-col text-right"><a href="/mercadorias/form" className="hover:text-primary">inserir nova mercadoria</a></div>
            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Registro
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Nome
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Fabricante
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Tipo
                        </h5>
                    </div>
                    <div className="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 className="text-sm font-medium uppercase xsm:text-base">
                            Descrição
                        </h5>
                    </div>
                </div>

                {products.map((product, key) => (
                    <div
                        className={`grid grid-cols-3 sm:grid-cols-5 ${key === products.length - 1
                                ? ""
                                : "border-b border-stroke dark:border-strokedark"
                            }`}
                        key={key}
                    >
                        <div className="flex items-center gap-3 p-2.5 xl:p-5">
                            <p className="hidden text-black dark:text-white sm:block">
                                {product.registro}
                            </p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-black dark:text-white">{product.nome}</p>
                        </div>

                        <div className="flex items-center justify-center p-2.5 xl:p-5">
                            <p className="text-meta-3">{product.fabricante}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-black dark:text-white">{product.tipo}</p>
                        </div>

                        <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                            <p className="text-meta-5">{product.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default TableGoods;
