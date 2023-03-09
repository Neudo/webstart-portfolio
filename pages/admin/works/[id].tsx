import {useEffect, useState} from "react";
import {IWork} from "@/@types/work";
import {NextPage} from "next";
import SidebarComponent from "@/components/admin-component/sidebar";
import Router, {useRouter} from "next/router";

interface Request {
    data?: IWork[],
}


const EditAdmin: NextPage = () => {
    const router = useRouter();
    const { id } = router.query

    const [work, setWork] = useState<IWork[] | null>(null)

    useEffect(() => {
        fetch(`/api/works/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setWork(data.work)
                console.log(work)
            })
    }, [id])


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

        const response = await fetch(`/api/works/${id}`, {
            method: 'PUT',
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
            <div className="w-1/2 m-auto">
                <form  className="flex flex-wrap form-add-work p-8 bg-lightBlueSecondary-0" onSubmit={handleSubmit}>
                    <label className="flex flex-col half-width " htmlFor="title"> Titre
                        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} />
                    </label>
                    <label className="flex flex-col half-width" htmlFor=""> Slug (url)
                        <input type="text" id="slug" name="slug" value={formData.slug} onChange={handleInputChange} />
                    </label>
                    <label className="flex flex-col half-width" htmlFor=""> Image
                        <input type="text" id="coverImage" name="coverImage" value={formData.coverImage} onChange={handleInputChange} />
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

                    <button type="submit">Éditer le work</button>
                </form>
            </div>
        </div>

    )
}


export default EditAdmin