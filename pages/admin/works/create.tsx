import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {IWork} from "@/@types/work";
import {NextPage} from "next";
import SidebarComponent from "@/components/admin-component/sidebar";
import Link from "next/link";
import Router from "next/router";

interface Request {
    data?: IWork[],
    error?: string,
    isLoading?: boolean
}


const CreateAdmin: NextPage = () => {

    const [formData, setFormData] = useState({
        seoTitle: '',
        seoDescription: '',
        title:'',
        slug:'',
        description:'',
        coverImage:'',
        published: false
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        const response = await fetch('/api/works/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                seo:{
                    title: formData.seoTitle,
                    description: formData.description
                },
                title: formData.title,
                description: formData.description,
                slug: formData.slug,
                coverImage: formData.coverImage,
                published: formData.published
            })
        })
        if (response.ok) {
            setFormData({
                seoTitle: '',
                seoDescription: '',
                title:'',
                slug:'',
                description:'',
                coverImage:'',
                published: false
            })
            Router.reload();

        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="flex">
            <SidebarComponent></SidebarComponent>
            <div className="w-1/2">
                <form  className="flex flex-wrap" onSubmit={handleSubmit}>
                    <label className="flex flex-col w-1/2 " htmlFor="title"> Titre
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                    </label>
                    <label className="flex flex-col w-1/2 " htmlFor=""> Slug (url)
                        <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleInputChange} />
                    </label>
                    <label className="flex flex-col w-1/2 " htmlFor=""> Description
                        <textarea id="description" name="description" value={formData.description} onChange={handleInputChange}></textarea>
                    </label>
                    <label className="flex flex-col w-1/2 " htmlFor=""> Image
                        <input type="text" id="coverImage" name="coverImage" value={formData.coverImage} onChange={handleInputChange} />
                    </label>

                    <div className="wrapper-seo">
                        <label className="flex flex-col w-1/2 " htmlFor="">titre
                            <input type="text" id="seoTitle" name="seoTitle" value={formData.seoTitle} onChange={handleInputChange} />
                        </label>
                        <label className="flex flex-col w-1/2 " htmlFor=""> Description
                            <textarea  id="seoDescription" name="seoDescription" value={formData.seoDescription} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <label htmlFor=""> Publier
                        <input type="checkbox" id="published" name="published"/>
                    </label>

                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>

    )
}


export default CreateAdmin