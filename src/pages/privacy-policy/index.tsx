import classNames from "../../consts/classNames";

const PrivacyPolicy = () => {
  return (
    <div
      className={`${classNames.containerClass} max-w-[1024px] mt-6 lg:mt-10`}
    >
      <h1 className="text-center text-3xl lg:text-5xl font-bold text-indigo-500">
        Privacy Policy
      </h1>
      <div className="mt-5 lg:mt-6">
        <p>
          At LOL BOOSTs, accessible from{" "}
          <a href="https://LOL BOOSTs.gg/" className="text-indigo-500">
            https://LOL BOOSTs.gg/
          </a>
          , one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by LOL BOOSTs and how we use it.
        </p>
        <div className="mt-3">
          <span className="text-xl">
            General Data Protection Regulation (GDPR)
          </span>
          <div className="mt-3">
            We are a Data Controller of your information. <br /> LOL BOOSTs
            legal basis for collecting and using the personal information
            described in
            <ul className="mt-3">
              <li className="list-inside list-disc">
                LOL BOOSTs needs to perform a contract with you
              </li>
              <li className="list-inside list-disc">
                You have given LOL BOOSTs permission to do so
              </li>
              <li className="list-inside list-disc">
                Processing your personal information is in LOL BOOSTs legitimate
                interests
              </li>
              <li className="list-inside list-disc">
                LOL BOOSTs needs to comply with the law
              </li>
            </ul>
          </div>
          <div className="mt-3">
            LOL BOOSTs will retain your personal information only for as long as
            is necessary for the purposes set out in this Privacy Policy. We
            will retain and use your information to the extent necessary to
            comply with our legal obligations, resolve disputes, and enforce our
            policies. <br />
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights. If you wish to be informed what
            Personal Information we hold about you and if you want it to be
            removed from our systems, please contact us. <br />
            In certain circumstances, you have the following data protection
            rights:
            <ul className="mt-3">
              <li className="list-inside list-disc">
                The right to access, update or to delete the information we have
                on you.
              </li>
              <li className="list-inside list-disc">
                The right of rectification.
              </li>
              <li className="list-inside list-disc">The right to object.</li>
              <li className="list-inside list-disc">
                The right to data portability
              </li>
              <li className="list-inside list-disc">
                The right to withdraw consent
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3 space-y-3">
          <div>
            <span className="text-xl">Log Files</span>
            <div className="mt-3 text-gray-300">
              LOL BOOSTs follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services’ analytics. The information
              collected by log files include internet protocol (IP) addresses,
              browser type, Internet Service Provider (ISP), date and time
              stamp, referring/exit pages, and possibly the number of clicks.
              These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users’ movement on the
              website, and gathering demographic information.
            </div>
          </div>
          <div>
            <span className="text-xl">Cookies and Web Beacons</span>
            <div className="mt-3 text-gray-300">
              Some of advertisers on our site may use cookies and web beacons.
              Our advertising partners are listed below. Each of our advertising
              partners has their own Privacy Policy for their policies on user
              data. For easier access, we hyperlinked to their Privacy Policies
              below.
              <ul className="list-inside list-disc">
                <li>Google</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="text-xl">Privacy Policies</span>
            <div className="mt-3 text-gray-300">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of LOL BOOSTs. Third-party ad servers or
              ad networks uses technologies like cookies, JavaScript, or Web
              Beacons that are used in their respective advertisements and links
              that appear on LOL BOOSTs, which are sent directly to users’
              browser. They automatically receive your IP address when this
              occurs. These technologies are used to measure the effectiveness
              of their advertising campaigns and/or to personalize the
              advertising content that you see on websites that you visit. Note
              that LOL BOOSTs has no access to or control over these cookies
              that are used by third-party advertisers.
            </div>
          </div>
          <div>
            <span className="text-xl">Third Party Privacy Policies</span>
            <div className="mt-3 text-gray-300">
              LOL BOOSTs’s Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options. <br /> You can choose to
              disable cookies through your individual browser options. To know
              more detailed information about cookie management with specific
              web browsers, it can be found at the browsers’ respective
              websites.
            </div>
          </div>
          <div>
            <span className="text-xl">Children’s Information</span>
            <div className="mt-3 text-gray-300">
              LOL BOOSTs does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </div>
          </div>
          <div>
            <span className="text-xl">Online Privacy Policy Only</span>
            <div className="mt-3 text-gray-300">
              Our Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in LOL BOOSTs. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </div>
          </div>
          <div>
            <span className="text-xl">Consent</span>
            <div className="mt-3 text-gray-300">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
