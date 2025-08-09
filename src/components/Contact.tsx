import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, CheckCircle, XCircle, X } from 'lucide-react';
import emailjs from 'emailjs-com';

interface AlertDialogProps {
  isOpen: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({ isOpen, type, title, message, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Dialog */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md transform transition-all duration-300 ease-out">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-all duration-200"
            >
              <X size={16} />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  type === 'success'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                }`}
              >
                {type === 'success' ? (
                  <CheckCircle size={32} className="animate-pulse" />
                ) : (
                  <XCircle size={32} className="animate-pulse" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                {message}
              </p>

              {/* Action Button */}
              <button
                onClick={onClose}
                className={`w-full px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ${
                  type === 'success'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                    : 'bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700'
                }`}
              >
                {type === 'success' ? 'Awesome!' : 'Try Again'}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-b-3xl overflow-hidden">
              <div
                className={`h-full ${
                  type === 'success'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'bg-gradient-to-r from-red-500 to-pink-600'
                }`}
                style={{
                  animation: 'shrinkProgress 5s linear forwards',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertDialog, setAlertDialog] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    title: string;
    message: string;
  }>({
    isOpen: false,
    type: 'success',
    title: '',
    message: '',
  });

  const showAlert = (type: 'success' | 'error', title: string, message: string) => {
    setAlertDialog({
      isOpen: true,
      type,
      title,
      message,
    });
  };

  const closeAlert = () => {
    setAlertDialog((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2th88x7',
        'template_d7abnp7',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        '_DSbhG9s2SEjGwv9F'
      );

      showAlert(
        'success',
        'Message Sent Successfully!',
        "Thank you for reaching out! I've received your message and will get back to you soon."
      );
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      showAlert(
        'error',
        'Oops! Something went wrong',
        "I couldn't send your message right now. Please try again later or contact me directly."
      );
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'aadilreyaz924@gmail.com',
      href: 'mailto:aadilreyaz924@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 6005309432',
      href: 'tel:+916005309432',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Srinagar, Jammu & Kashmir, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      href: 'https://github.com/Aadil-Reyaz-Wani',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aadilreyazwani/',
      color: 'hover:text-blue-600',
    },
    {
      icon: <MessageSquare size={24} />,
      name: 'WhatsApp',
      href: 'https://wa.me/916005309432',
      color: 'hover:text-green-600',
    },
  ];

  return (
    <>
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new opportunities, interesting
                  projects, or just having a conversation about Android
                  development and technology.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 ${social.color} hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Dialog */}
      <AlertDialog
        isOpen={alertDialog.isOpen}
        type={alertDialog.type}
        title={alertDialog.title}
        message={alertDialog.message}
        onClose={closeAlert}
      />
    </>
  );
};

export default Contact;
