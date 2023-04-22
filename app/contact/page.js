import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import ContactPageSection from "@/components/ContactPageSection";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiMapPin } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { getHeadOfficeData } from "@/lib/api/headOffice";

const ContactPage = async () => {
  const headOffice = await getHeadOfficeData();
  const { openingDays, openingHours, streetAddress, city, postcode, country, phone, email } = headOffice;

  return (
    <main className="contact-page margin">
      <div className="contact-form-container">
        <div>
          <h1 className="page-title">Contact Us</h1>
          <h3>Get in touch and we will get back to you as soon as we can.</h3>
        </div>
        <ContactForm />
      </div>

      <div className="company-info-container">
        <ContactPageSection
          Icon={AiOutlineClockCircle}
          subheading="Opening hours"
          array={[openingDays, openingHours]}
        />
        <ContactPageSection Icon={BiMapPin} subheading="Address" array={[streetAddress, city, country, postcode]} />
        <ContactPageSection Icon={HiOutlineMail} subheading="Support" array={[email, phone]} />
        <section className="socials">
          <h2 className="subheading">Follow us</h2>
          <SocialLinks />
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
