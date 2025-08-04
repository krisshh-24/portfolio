import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea"
import axios from 'axios'
type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("http://localhost:5008/send", data);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };
  

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12  bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-semibold text-gray-800 mb-8 text-center montserrat"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Name */}
        <div>
        <Label htmlFor="name" className="block text-sm text-gray-600 mb-1">
  Name <span className="text-black">*</span>
</Label>
          <Input
            id="name"
            {...register("name", { required: true })}
            placeholder="Your name..."
            className="w-full  border-gray-300 focus: outline-none py-2 lekton-regular"
          />
        </div>

        {/* Email */}
        <div>
        <Label htmlFor="name" className="block text-sm text-gray-600 mb-1">
  Email <span className="text-black">*</span>
</Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="Your email..."
            className="w-full border-b border-gray-300 focus:border-black outline-none py-2 lekton-regular"
          />
        </div>

        {/* Message */}
        <div>
        <Label htmlFor="name" className="block text-sm text-gray-600 mb-1">
  Message <span className="text-black">*</span>
</Label>
          <Textarea
            id="message"
            {...register("message", { required: true })}
            placeholder="Write your message..."
            className="w-full border-b border-gray-300 focus:border-black outline-none py-2 resize-none lekton-regular"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className=" bg-black text-white py-3 rounded-md hover:bg-gray-800 transition w-30 items-center"
        >
          Send Message
        </Button>
      </motion.form>
    </section>
  );
};

export default Contact;
