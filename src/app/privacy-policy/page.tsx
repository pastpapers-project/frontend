// pages/privacy-policy.tsx
import PrivacyPolicyDialog from '@/mycomponents/privacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <PrivacyPolicyDialog>
        {/* Wrap everything in a single div */}
        <div>
          {/* Last Updated */}
          <p className="text-sm text-gray-500">Last updated: November 11, 2024</p>

          {/* Introduction */}
          <div className="space-y-2">
            <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>
          </div>

          {/* Interpretation and Definitions */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mt-6">Interpretation and Definitions</h2>
            <h3 className="text-lg font-medium">Interpretation</h3>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
          </div>

          {/* Definitions */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Definitions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account:</strong> means a unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Affiliate:</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
              <li><strong>Company:</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to pastprep.</li>
              <li><strong>Cookies:</strong> are small files that are placed on Your computer, mobile device or any other device by a website.</li>
              <li><strong>Country:</strong> refers to: Pakistan</li>
              <li><strong>Device:</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Personal Data:</strong> is any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service:</strong> refers to the Website.</li>
              <li><strong>Website:</strong> refers to pastprep, accessible from https://www.pastprep.pro</li>
            </ul>
          </div>

          {/* Types of Data Collected */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mt-6">Collecting and Using Your Personal Data</h2>
            <h3 className="text-lg font-medium">Types of Data Collected</h3>
            
            <h4 className="text-base font-medium">Personal Data</h4>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul className="list-disc pl-6">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Usage Data</li>
            </ul>

            <h4 className="text-base font-medium">Usage Data</h4>
            <p>Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address, browser type, browser version, pages visited, time and date of visits, time spent on pages, and other diagnostic data.</p>
          </div>

          {/* Social Media Integration */}
          <div className="space-y-2">
            <h4 className="text-base font-medium">Third-Party Social Media Services</h4>
            <p>We allow You to create an account and log in through:</p>
            <ul className="list-disc pl-6">
              <li>Google</li>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* Use of Personal Data */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To provide and maintain our Service</strong></li>
              <li><strong>To manage Your Account</strong> and provide You with access to various functionalities</li>
              <li><strong>To contact You</strong> by email, SMS, or other forms of communication</li>
              <li><strong>For business transfers</strong> in connection with any merger, sale of assets, or acquisition</li>
            </ul>
          </div>

          {/* Security and Retention */}
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Security of Your Personal Data</h3>
            <p>While We implement commercially acceptable means of protecting Your Personal Data, no method of transmission over the Internet is 100% secure.</p>
            
            <h3 className="text-lg font-medium">Retention of Your Personal Data</h3>
            <p>We retain Your Personal Data only for as long as necessary for the purposes outlined in this Privacy Policy or to comply with legal obligations.</p>
          </div>

          {/* Children's Privacy */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mt-6">Children's Privacy</h2>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personal information from children under 13.</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us:</p>
            <ul className="list-disc pl-6">
              <li>Email: pastprep.pro@gmail.com</li>
              <li>Phone: 03319765860</li>
            </ul>
          </div>
        </div>
      </PrivacyPolicyDialog>
    </div>
  );
};

export default PrivacyPolicyPage;
