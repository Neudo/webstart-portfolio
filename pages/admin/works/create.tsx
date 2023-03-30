import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {IWork} from "@/@types/work";
import {NextPage} from "next";
import {CldUploadButton} from 'next-cloudinary';
const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET;



import SidebarComponent from "@/components/admin-component/sidebar";
import Link from "next/link";
import Router from "next/router";
import * as process from "process";
import * as url from "url";

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
                coverImage: imageUrl ,
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
            })
            Router.reload();

        }
    }
    const [imageUrl, setImageUrl] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleUpload = (result: { info: { public_id: any; }; }) => {
        const url = result.info.public_id
        setImageUrl(url);
    };

    return (
        <div className="flex">
            <SidebarComponent></SidebarComponent>
            <div className="w-1/2 m-auto">
                <form  className="flex flex-wrap form-add-work p-8 bg-lightBlueSecondary-0" onSubmit={handleSubmit}>
                    <label className="flex flex-col half-width " htmlFor="title"> Titre
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                    </label>
                    <label className="flex flex-col half-width" htmlFor=""> Slug (url)
                        <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleInputChange} />
                    </label>
                    <CldUploadButton
                        uploadPreset={uploadPreset}
                        onUpload={handleUpload}
                    >
                        Upload image
                    </CldUploadButton>
                    <label className="flex flex-col half-width" htmlFor=""> ID de l image
                        <input type="text" id="coverImage" placeholder="id de l'image" name="coverImage" value={imageUrl}/>
                    </label>

                    <label className="flex flex-col w-full" htmlFor=""> Description
                        <textarea id="description" name="description" value={formData.description}
                                  onChange={handleInputChange}></textarea>
                    </label>

                    <div className="wrapper-seo bg-darkBlue-0 mt-3 mb-3 p-3">
                        <h3 className="mb-5">Seo</h3>
                        <label className="flex flex-col w-1/2 text-white " htmlFor="">titre
                            <input type="text" id="seoTitle" name="seoTitle" value={formData.seoTitle} onChange={handleInputChange} />
                        </label>
                        <label className="flex flex-col w-1/2 text-white " htmlFor=""> Description
                            <textarea  id="seoDescription" name="seoDescription" value={formData.seoDescription} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <label className="w-full" htmlFor="published"> Publier
                        <input type="checkbox" id="published" name="published"/>
                    </label>

                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>

    )
}


export default CreateAdmin