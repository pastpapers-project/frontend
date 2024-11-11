import TermsConditionsDialog from '@/mycomponents/termsConditions';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <TermsConditionsDialog>
        <div>
          {/* Introduction */}
          <div className="space-y-2">
            <p>These terms and conditions outline the rules and regulations for the use of pastprep's Website, located at https://www.pastprep.pro.</p>
            <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use pastprep if you do not agree to take all of the terms and conditions stated on this page.</p>
          </div>

          {/* Terminology */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Terminology</h2>
            <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>"Client", "You" and "Your" refers to you, the person accessing this website and accepting these terms and conditions.</li>
              <li>"The Company", "Ourselves", "We", "Our" and "Us", refers to pastprep.</li>
              <li>"Party", "Parties", or "Us", refers to both the Client and ourselves.</li>
            </ul>
          </div>

          {/* Cookies */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Cookies</h2>
            <p>We employ the use of cookies. By accessing pastprep, you agreed to use cookies in agreement with the pastprep's Privacy Policy.</p>
            <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.</p>
          </div>

          {/* License */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">License</h2>
            <p>Unless otherwise stated, pastprep and/or its licensors own the intellectual property rights for all material on pastprep. All intellectual property rights are reserved.</p>
            <p className="font-medium mt-4">You must not:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Republish material from pastprep</li>
              <li>Sell, rent or sub-license material from pastprep</li>
              <li>Reproduce, duplicate or copy material from pastprep</li>
              <li>Redistribute content from pastprep</li>
            </ul>
          </div>

          {/* User Comments */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">User Comments</h2>
            <p>Parts of this website offer an opportunity for users to post and exchange opinions and information. pastprep does not filter, edit, publish or review Comments prior to their presence on the website.</p>
            <p className="font-medium mt-4">You warrant and represent that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so</li>
              <li>The Comments do not invade any intellectual property right</li>
              <li>The Comments do not contain any defamatory, libelous, offensive, indecent or unlawful material</li>
              <li>The Comments will not be used to solicit or promote business or unlawful activity</li>
            </ul>
          </div>

          {/* Hyperlinking */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Hyperlinking to our Content</h2>
            <p>The following organizations may link to our Website without prior written approval:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Government agencies</li>
              <li>Search engines</li>
              <li>News organizations</li>
              <li>Online directory distributors</li>
              <li>System wide Accredited Businesses</li>
            </ul>
          </div>

          {/* Content Liability */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Content Liability</h2>
            <p>We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that arise on your Website.</p>
          </div>

          {/* Disclaimer */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.</p>
            <p className="font-medium mt-4">Nothing in this disclaimer will:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Limit or exclude our or your liability for death or personal injury</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
          </div>

          {/* Rights Reservation */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Reservation of Rights</h2>
            <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time.</p>
          </div>
        </div>
      </TermsConditionsDialog>
    </div>
  );
};

export default TermsAndConditions;
