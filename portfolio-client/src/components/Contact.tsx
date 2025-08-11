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
      await axios.post("api/send", data);
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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden"
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.01)_0%,_transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-zinc-800/20 rounded-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-zinc-700/10 rounded-full" />
      {/* Heading */}
      <motion.h2
        className="text-4xl font-semibold text-white mb-8 text-center montserrat relative z-10"
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
        className="w-full max-w-lg space-y-6 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Name */}
        <div>
        <Label htmlFor="name" className="block text-sm text-gray-400 mb-1">
  Name <span className="text-white">*</span>
</Label>
          <Input
            id="name"
            {...register("name", { required: true })}
            placeholder="Your name..."
            className="w-full bg-zinc-800/50 border-gray-700 focus:border-blue-400 text-white placeholder-gray-500 outline-none py-2 lekton-regular"
          />
        </div>

        {/* Email */}
        <div>
        <Label htmlFor="email" className="block text-sm text-gray-400 mb-1">
  Email <span className="text-white">*</span>
</Label>
          <Input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="Your email..."
            className="w-full bg-zinc-800/50 border-gray-700 focus:border-blue-400 text-white placeholder-gray-500 outline-none py-2 lekton-regular"
          />
        </div>

        {/* Message */}
        <div>
        <Label htmlFor="message" className="block text-sm text-gray-400 mb-1">
  Message <span className="text-white">*</span>
</Label>
          <Textarea
            id="message"
            {...register("message", { required: true })}
            placeholder="Write your message..."
            className="w-full bg-zinc-800/50 border-gray-700 focus:border-blue-400 text-white placeholder-gray-500 outline-none py-2 resize-none lekton-regular"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="bg-white text-black py-3 rounded-md hover:bg-gray-100 transition w-30 items-center"
        >
          Send Message
        </Button>
      </motion.form>
    </section>
  );
};

export default Contact;
