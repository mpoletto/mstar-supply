"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Formulário de Mercadorias | Next.js E-commerce Dashboard Template",
//   description: "Este formulário insere novas mercadorias no banco de dados.",
//   // other metadata
// };

type FormData = {
  // registro: number;
  nome: string;
  fabricante: string;
  tipo: string;
  descricao: string;
}

const FormLayout = () => {
  // const [db_data, setProducts] = React.useState<GOODS[]>([]);
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //       const res = await fetch('http://localhost:8000/');
  //       if (!res.ok) {
  //           throw new Error('Failed to fetch data');
  //       }

  //       const data = await res.json();
  //       const goodsData = data.mysql_data;

  //       setProducts(goodsData);
  //   };

  //   fetchData();
  // }, []);

  const mockAPI = async () => {
    return new Promise<FormData>((resolve, reject) => {
      setTimeout(() => {
        resolve({
          // registro: 1,
          nome: "Mercadoria 1",
          fabricante: "Fabricante 1",
          tipo: "Tipo 1",
          descricao: "Descrição 1"
        });
      }, 1000);
    });
  }
  
  const { 
    handleSubmit, 
    register, 
    formState: { errors }, 
  } = useForm<FormData>({
    mode: "onBlur",
    // defaultValues: async () => mockAPI(registro), // passar o registro por url
  })
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => React.useEffect(() => {
    const saveData = async () => {
      const res = await fetch('http://localhost:8000/mercadoria/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      saveData()
    }
  })
  const onError: SubmitErrorHandler<FormData> = (errors) => console.log(errors)


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
            <form onSubmit={ handleSubmit(onSubmit, onError) }>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Nome da mercadoria
                    </label>
                    {/* <input type="hidden" value="1" name="registro" /> */}
                    <input 
                      {...register("nome", { 
                        required: "Requer um nome",
                        minLength: { value: 3, message: "Mínimo de 3 caracteres" },
                      })}
                      type="text" 
                      name="nome" 
                      placeholder="mercadoria"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    { errors?.nome && (
                      <span className="text-meta-1">{errors.nome.message}</span>
                    ) }
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Fabricante
                    </label>
                    <input 
                    {...register("fabricante", { 
                      required: "Requer um fabricante",
                      minLength: { value: 2, message: "Nome muito curto, preencha com pelo menos 2 caracteres" },
                    })}
                      type="text" 
                      name="fabricante" 
                      placeholder="fabricante"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    { errors?.fabricante && (
                      <span className="text-meta-1">{errors.fabricante.message}</span>
                    ) }
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Tipo <span className="text-meta-1">*</span>
                  </label>
                  <input 
                  {...register("tipo", { 
                    required: "Requer um tipo",
                  })}
                    type="text" 
                    name="tipo" 
                    placeholder="tipo"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  { errors?.tipo && (
                    <span className="text-meta-1">{errors.tipo.message}</span>
                  ) }
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Descrição
                  </label>
                  <input 
                  {...register("descricao", { 
                    maxLength: { value: 255, message: "Máximo de 255 caracteres" },
                  })}
                    type="text" 
                    name="descricao" 
                    placeholder="descrição"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  { errors?.descricao && (
                    <span className="text-meta-1">{errors.descricao.message}</span>
                  ) }
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
