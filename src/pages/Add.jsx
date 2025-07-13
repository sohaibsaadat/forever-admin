import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';



const Add = ({token}) => {
  const [image1,setimage1] = useState(false)
  const [image2,setimage2] = useState(false)
  const [image3,setimage3] = useState(false)
  const [image4,setimage4] = useState(false)

  const [name,setName] =useState('')
  const [description,setDescription] =useState('')
  const [price,setPrice] =useState('')
  const [category,setCategory] =useState('Men')
  const [subcategory,setSubcategory] =useState('Topwear')
  const [bestseller,setBestseller] =useState('')
  const [sizes,setSizes] =useState([])

  const onSubmitHandler = async (e)=>{
e.preventDefault()
try {
  const formData = new FormData()
  formData.append('name',name)
  formData.append('description',description)
  formData.append('price',price)
  formData.append('category',category)
  formData.append('subcategory',subcategory)
  formData.append('bestseller',bestseller)
  formData.append('sizes',JSON.stringify(sizes))

 image1 && formData.append("image1",image1)
 image2 && formData.append("image2",image2)
 image3 && formData.append("image3",image3)
 image4 && formData.append("image4",image4)

 const presponse = await axios.post(backendUrl +"/api/product/add",formData,{headers:{token}})
 console.log(presponse.data);
 toast.success(presponse.data.messege)
 
 
} catch (error) {
    console.log("Error while submitting form:", error.message);
}
   }  
  const handleSizeToggle = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter(s => s !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img  className='w-20' src={!image1? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setimage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>
          <label htmlFor="image2">
            <img  className='w-20' src={!image2? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setimage2(e.target.files[0])} type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20'  src={!image3? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setimage3(e.target.files[0])} type="file" id='image3' hidden />
          </label>
                    <label htmlFor="image4">
            <img  className='w-20' src={!image4? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setimage4(e.target.files[0])} type="file" id='image4' hidden />
          </label>

        </div>
      </div>
<div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          className='w-full max-w-[500px] px-3 py-2'
          type="text"
          placeholder='Type Here'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          className='w-full max-w-[500px] px-3 py-2'
          placeholder='Write Content here'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select
            className='w-full px-3 py-2'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select
            className='w-full px-3 py-2'
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className=' mb-2'>Product Price</p>
          <input
            className='w-full px-3 py-2 sm:w-120px'
            placeholder='100'
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          {['S', 'M', 'L', 'XL'].map(size => (
            <div key={size}>
              <p
                className={`px-3 py-1 cursor-pointer ${
                  sizes.includes(size) ? 'bg-black text-white' : 'bg-slate-200'
                }`}
                onClick={() => handleSizeToggle(size)}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input
          type="checkbox"
          id='bestseller'
          checked={bestseller}
          onChange={(e) => setBestseller(e.target.checked)}
        />
        <label className='cursor-pointer' htmlFor="bestseller">Add to Best Seller</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  );
};

export default Add;