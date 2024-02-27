import React, { useRef, useState } from 'react'
import img from "../images/customer-service-flatline.png"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

function Contact() {
	const form = useRef();
	const [alertVisible, setAlertVisible] =useState(false)
	const [alertMessage, setAlertMessage] = useState('');
 	const [alertType, setAlertType] = useState('');

	  const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm(
			 'service_mg8zj9k', 'template_usa9fwg', form.current, 'VjB8QHxIsokhf2ewX',
			)
		  .then((result) => {
			  console.log(result.text);
			  form.current.reset()
			  showAlert("Message sent successfully", 'Success')
			  
		  })
		  .catch((error) => {
			  console.log(error.text);
			  showAlert("An error ocurred while sending message", 'Error')
		  });
	  };

	  const showAlert = (message, type) => {
		setAlertMessage(message)
		setAlertType(type)
		setAlertVisible(true)

		setTimeout(() => {
			setAlertVisible(false)
		}, 5000);

	  }

  return (
	<div>
		{alertVisible && (
			  <div className="flex w-96 rounded-lg fixed md:py-32 right-8 ">
			  <div className={` ${alertType === "Success" ? 'bg-lime-400' : 'bg-red-600'} py-4 px-6 rounded-l-lg flex items-center`}>
				{alertType === "Success" ? (
				<svg xmlns="http://www.w3.org/2000/svg" className="text-white fill-current" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
				) : (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="fill-current text-white" width="20" height="20"><path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path></svg>
				) }

			  </div>
			  <div className="px-4 py-6 bg-white rounded-r-lg flex justify-between items-center w-full border border-l-transparent border-gray-200">
				<div>{alertMessage}</div>
				<button onClick={()=> setAlertVisible(false)}>
				  <svg xmlns="http://www.w3.org/2000/svg" className="fill-current text-gray-700" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg>
				</button>
			  </div>
			</div>
		)}





	<NavBar/>
	<div className='text-center md:text-left mx-auto flex flex-col-reverse lg:flex-row-reverse'>
	<div className='w-full md:w-1/2 p-12 md:p-8'>
		<h1 className='text-3xl md:text-3xl font-medium py-2 md:py-4'>Contact <span className='text-transparent bg-clip-text md:text-2xl bg-gradient-to-r from-pink-300 to-blue-600'>Kenya Logos</span></h1>
		<p className='block md:pr-32 text-base'>Thank you for visiting our website. If you want to partner with us, please feel free to use the contact form below.</p>
		
		<div className="container py-8">
  <form onSubmit={sendEmail} ref={form} className="animate__animated animate__slideInRight max-w-md bg-white mx-auto p-4 md:p-6 rounded-md shadow-xl">
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="col-span-1">
        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1">
          First
        </label>
        <input
          required
          type="text"
          name="first_name"
          placeholder="First Name"
          className="w-full border px-3 py-2 rounded-md"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1">
          Last
        </label>
        <input
          required
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="w-full border px-3 py-2 rounded-md"
        />
      </div>
    </div>
    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
      Email
    </label>
    <input
      required
      type="email"
      name="reply_to"
      placeholder="johndoe@gmail.com"
      className="w-full border px-3 py-2 mb-4 rounded-md"
    />
    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
      Message
    </label>
    <textarea
      required
      id="message"
      name="message"
      placeholder="Message"
      className="w-full border px-3 py-2 mb-4 rounded-md"
      rows="5"
    />
    <button
      type="submit"
      className="w-full bg-pink-100 text-black py-2 px-4 rounded-md hover:bg-pink-400"
    >
      Submit
    </button>
  </form>
</div>

	</div>
	<div className='hidden md:flex w-full md:w-1/2 rounded'>
		<img src={img} alt="Contact_Image" className='p-24 animate__animated animate__slideInLeft w-full h-full object-contain'/>
	</div>
	</div>
	<h2 className='text-3xl text-center font-medium py-8 bg-pink-200'>Our Location</h2>
	<div className="w-full h-96">
	  <iframe title="HHAFarm" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.1166181257804!2d37.06607207590261!3d-1.0745926354333375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMDQnMjguNiJTIDM3wrAwNCcwNy4xIkU!5e0!3m2!1sen!2ske!4v1692721686960!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" className="w-full h-full" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
	<Footer/>
	</div>
    
  )
}

export default Contact