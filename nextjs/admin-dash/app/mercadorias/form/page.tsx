import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { z } from "zod";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Formulário de Mercadorias | Next.js E-commerce Dashboard Template",
  description: "Este formulário insere novas mercadorias no banco de dados.",
  // other metadata
};

const FormLayout = () => {

  return (
    <>
      <Breadcrumb pageName="Formulário de Mercadorias" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Formulário de mercadorias
              </h3>
            </div>
            <form action="/api/mercadoria" method="POST">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nome da mercadoria
                    </label>
                    <input
                      type="text" 
                      name="nome" 
                      placeholder="mercadoria"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Fabricante
                    </label>
                    <input
                      type="text" 
                      name="fabricante" 
                      placeholder="fabricante"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Tipo <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text" 
                    name="tipo" 
                    placeholder="tipo"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Descrição
                  </label>
                  <input
                    type="text" 
                    name="descricao" 
                    placeholder="descrição"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Salvar Dados
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default FormLayout;
