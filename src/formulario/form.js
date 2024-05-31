import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './_form.sass'

const schema = yup 
.object({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().required("Campo Obrigatório").email(),
    passoword:yup.string().required("Campo Obrigatório").min(6,"Minimo 6 caracteres"),
}).required()


export default function Form(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      })
      const save = (data) => { alert("Obrigado pelo cadastro") 
        console.log(data)}

    return(
        <div className="container">
            <form onSubmit={handleSubmit(save)} className="form">
                <label className="label">Nome</label>
                <input type="text" placeholder="Nome"  {...register("name")} className="input" />
                {errors?.name && <p className="error--text">{errors?.name?.message}</p>}
                <label className="label">E-mail</label>
                <input type="text" placeholder="E-mail"  {...register("email")} className="input"/>
                {errors?.email && <p className="error--text">{errors?.email?.message}</p>}
                <label className="label">Senha</label>
                <input type="password" placeholder="Senha"  {...register("passoword")} className="input"/>
                {errors?.passoword && <p className="error--text">{errors?.passoword?.message}</p>}
                <button type="submit" className="btn">Enviar</button>
            </form>
        </div>
    )
}