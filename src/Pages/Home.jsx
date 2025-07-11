import React from "react";
import Banner from "../components/UI/Banner";
import Cards from '../components/UI/Cards'
import { useNavigate } from "react-router-dom";
import GetData from "../HOC/Custome/GetData";
function Home() {
    const navigate = useNavigate()

    const transfer = () => {
        navigate('/about')
    }
    const datas = GetData('services')
    const carddata = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "card 1",
            description: "Esse consequat cupidatat consectetur mollit. Est incididunt eiusmod velit minim est nulla fugiat labore ullamco non ullamco irure duis ipsum. Deserunt officia aliquip Lorem exercitation aute consequat. Mollit irure qui proident est deserunt quis ex aute nostrud qui laborum laboris mollit commodo. Quis labore pariatur dolore eiusmod. Commodo velit eu irure est"
        },
        {
            image: 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "card 2",
            description: "Esse consequat cupidatat consectetur mollit. Est incididunt eiusmod velit minim est nulla fugiat labore ullamco non ullamco irure duis ipsum. Deserunt officia aliquip Lorem exercitation aute consequat. Mollit irure qui proident est deserunt quis ex aute nostrud qui laborum laboris mollit commodo. Quis labore pariatur dolore eiusmod. Commodo velit eu irure est"
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1676478746990-4ef5c8ef234a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: "card 3",
            description: "Esse consequat cupidatat consectetur mollit. Est incididunt eiusmod velit minim est nulla fugiat labore ullamco non ullamco irure duis ipsum. Deserunt officia aliquip Lorem exercitation aute consequat. Mollit irure qui proident est deserunt quis ex aute nostrud qui laborum laboris mollit commodo. Quis labore pariatur dolore eiusmod. Commodo velit eu irure est"
        }

    ]


    return (

        <div className='pb-10'>
            <Banner title="home" subtitle="it's a home"
                description="it's a description" />
            <div className='grid grid-cols-3 gap-6 w-10/ 12mx-auto mt-10 '>


                {
                    datas.map((val, i) => {
                        return <Cards key={i} title={val.title} />

                    })
                }
            </div>

        </div>
    )
}


export default Home




