'use client'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'


import { FormEvent, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';
import ToastNot from '@/components/toast';



// Grab values from env
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;



export default function ContactPage() {
  const [formData, setFormData] = useState({ from_name: '', reply_email: '', message: '' })
   const [isSending, setIsSending] = useState(false);
 const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  const sendEmail = async (e: FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return;

    const form = formRef.current;
   const name = (form.elements.namedItem('from_name') as HTMLInputElement)?.value.trim();
   const email = (form.elements.namedItem('reply_email') as HTMLInputElement)?.value.trim();
  const message = (form.elements.namedItem('message') as HTMLTextAreaElement)?.value.trim();


     if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setIsSending(true);
    const toastId = toast.loading('Sending message...');

  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formRef.current,
      PUBLIC_KEY
    );

    if (process.env.NODE_ENV === 'development') {
        console.log('Email sent:', result.text);
      }
    toast.success('Message sent successfully!', { id: toastId });
     setFormData({ from_name: '', reply_email: '', message: '' })
  } catch (error: unknown) {
    if (process.env.NODE_ENV === 'development') {
    if (
      typeof error === 'object' &&
      error !== null &&
      'text' in error
    ) {
      console.error('Error sending email:', (error as { text: string }).text);
    } else {
      console.error('Unexpected error:', error);
    }
  }
  toast.error('Failed to send message. Please try again.', { id: toastId });
  }finally {
      setIsSending(false);
    }
};

  return (
    <div className='relative min-h-screen w-full flex flex-col overflow-hidden'>
        <Navbar variant="dark"/> 
    <main className="flex-grow max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-center max-md:mt-12">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-8">
        For academic inquiries, collaborations, or professional messages, kindly use the form below.
      
      </p>
        <ToastNot />
        <form onSubmit={sendEmail} ref={formRef} className="bg-white shadow-md rounded-xl p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="from_name"
              required
              value={formData.from_name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="reply_email"
              required
              value={formData.reply_email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:ring focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
          disabled={isSending}
          className={`w-full py-2 px-4 text-white rounded transition duration-300 ${
            isSending ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-600 cursor-pointer hover:bg-teal-700'
          }`}
          >
            Send Message
          </button>
        </form>
     
    </main>
    <Footer /> 
    </div>
  )
}
