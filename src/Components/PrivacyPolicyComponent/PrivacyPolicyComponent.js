import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import LogoComponent from "../Shared/LogoComponent";
import FooterComponent from "../HomeComponent/FooterComponent";

const PrivacyPolicyComponent = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/" className="navbar-brand" href="#">
                    <LogoComponent className="mr-1" light={false} styles={{width: "120px"}} />
                </NavLink>
            </nav>
            <div className="container member-terms-privacy">
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12"><h1 className="font-weight-bold text-center">Privacy Policy</h1>
                        <p className="subtitle font-weight-bold"><b>Effective Date:
                            February 1, 2020</b></p>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Privacy Commitment</h3>
                            <p className="subtitle font-weight-light">
                                We are committed to protecting your privacy. This Privacy Policy (the “Privacy Policy”) is provided
                                by Acquire Interactive (the “Website to help you understand our online information practices
                                enabling you to make an informed decision about the way we collect and use your information.
                                In order to make this Privacy Policy accessible, it is available on our homepage and wherever personally
                                identifiable information (“PII”) may be requested. If you do not agree with the terms and conditions of our Privacy
                                Policy in its entirety, you are not authorized to use or access the Website or apply for any
                                product/service available on the Website.
                            </p></div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Information Collected</h3><p
                            className="subtitle font-weight-light">
                            This policy is applicable to any and all information submitted or collected on the Website.
                            From the information you provide on our websites, we collect such PII as your: (a) name; (b) street address;
                            (c) telephone number(s) (including home, mobile and work); (d) date of birth; (e) financial account information; (f)
                            Social Security Number information; (g) employment information; (h) income information; and (i) any other personal or
                            demographic information necessary to provide the products and/or services that you have applied for on the Website.
                            For purposes of this Privacy Policy, items (e) and (f) in the preceding sentence shall be referred to, collectively,
                            as “Sensitive Information.”
                        </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Use of Information</h3>
                            <p className="subtitle font-weight-light">
                                Subject to applicable state and federal law, we may use your personal, demographic and profile information
                                for marketing and promotional purposes, for editorial or feedback purposes, for statistical analysis and/or
                                to assist us in improving our Website. Collected information may be added to our databases to use in e-mails or
                                postal mailings concerning upcoming events, new services and products, site updates and/or the status of online orders.
                            </p>
                            <p className="subtitle font-weight-light">
                                Should you decide to provide PII (including Sensitive Information), your information
                                will be used in considering you for a Acquire Interactive account; will be shared with
                                trusted third parties such as Affiliated Loan Providers, credit bureaus, and/or other financial service
                                providers in accordance with applicable law; and PII (excluding Sensitive Information) will be used to market
                                products and services that may be of interest to you. We reserve the right to share, rent, sell or otherwise disclose
                                your PII (other than your Sensitive Information) with/to third parties in accordance with applicable laws. These third
                                parties may include, but are in no way limited to, providers of direct marketing services and applications
                                (including lookup and reference, data enhancement, suppression and validation), e-mail marketers and telemarketers.
                                Information we collect may be added to our databases and used for future SMS text-messaging, telemarketing,
                                e-mails and/or postal mailings concerning services, new products, updates, upcoming events, and/or the status
                                of online orders and/or online loans.
                            </p>
                            <p className="subtitle font-weight-light">
                                Acquire Interactive reserves the right to release current or past customer information:
                                (i) in the event that we believe the Website is being used or has been used in violation
                                of the Terms of Website Use and/or to commit unlawful acts; (ii) if we are sold, acquired or
                                where we deem it necessary or appropriate; and (iii) when requested by governmental or
                                quasi-governmental authorities conducting an investigation, hearing or the like and/or if
                                the information is subpoenaed. By agreeing to this Privacy Policy, you hereby consent to
                                the disclosure of any record or communication to any third party when Acquire Interactive
                                in its sole discretion, determines the disclosure to be appropriate including, without limitation,
                                sharing your e-mail address with other third parties for suppression purposes in compliance with the
                                requirements of the CAN-SPAM Act of 2003, as amended.
                            </p>
                            <p className="subtitle font-weight-light">
                                By using this Website, you agree to be contacted in any manner contemplated in this section
                                even if your number is found on a do-not-call registry or similar registry. We may also employ
                                other companies and/or individuals to carry out certain functions on our behalf, such as analyzing data,
                                sending electronic and direct mail, providing marketing analysis and removing duplicate information from
                                customer lists. In order to perform their various functions for Acquire Interactive, these agents
                                have access to our users’ personal information as needed
                            </p>
                            <p className="subtitle font-weight-light">
                                Through your use of this Website and agreement with this Privacy Policy, you
                                authorize us to use your Sensitive Information, such as your Social Security Number,
                                to obtain other information about you from third-parties where such information was incompletely
                                or improperly filled out on our registration form. Such third-parties include, but are not limited to,
                                consumer credit bureaus, consumer reporting agencies and other outside parties as permitted or required by
                                applicable laws. In order to determine you eligibility for a loan, any and all information that we
                                collect from you as part of your loan application, and from such third-parties, may be used.
                            </p>
                            <p className="subtitle font-weight-light">
                                Should you choose to provide Sensitive Information, such as your Social Security Number,
                                your information may be used to determine your financial status. If such information
                                is not provided, other information you provided for the purpose of verifying your
                                eligibility for a loan or for any other programs, offers or services, may be used.
                                Once you qualify for a loan, any specific financial information relating to the loan will be
                                stored and utilized by your applicable lender pursuant to the terms of that lender’s Privacy Policy.
                            </p>
                            <p className="subtitle font-weight-light">
                                By submitting your information on the Website, you agree to receive mobile marketing from
                                us and our third party advertisers and marketers. This includes, but is not limited to
                                text-message based marketing. In the event that your mobile telephone number is listed on
                                state and/or federal do-not-call registries, we retain the right and you consent to allow us
                                to contact you via text-message based marketing. Furthermore, registration and/or using the Website,
                                constitutes your acknowledgement that such registration constitutes an inquiry and/or application for
                                purposes of the Amended Telemarketing Sales Rule (16 CFR Â§310 et seq.), as amended from time to time.
                                Even in the event that your telephone number is listed on the Federal Trade Commission’s Do-Not-Call List,
                                we retain the right and you consent to allow us to contact you via telemarketing in accordance
                                with the Rule.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">How is Information Collected</h3>
                            <p className="subtitle font-weight-light">
                                Acquire Interactive may collect non-personally identifiable information through the use of some or all of the following processes:
                            </p>
                            <p className="subtitle font-weight-light">
                                Cookies: Acquire Interactive may utilize cookies to properly route Website users, customize users’ experience
                                and to track user behavior in order to determine appropriate marketing offers to target toward users. Cookies, by
                                themselves, do not collect PI. Acquire Interactive provides links to advertiser and partner websites.
                                These sites may choose to use cookies to better promote their products and services. To learn more about
                                cookies, including how to disable them, please visit www.cookiecentral.com. Please be advised that certain
                                areas of our Website can be accessed only in conjunction with cookies or similar devices and if you choose to
                                disable cookies or similar devices, this might prevent you from accessing some of our content.
                            </p>
                            <p className="subtitle font-weight-light">
                                Usage Tracking: Acquire Interactive may track information related to the e-mail and web
                                pages viewed by users, as well as the hyperlinks clicked by users while viewing our e-mails and the pages on our Website.
                            </p>
                            <p className="subtitle font-weight-light">
                                Log Files: Log files may be used to track and monitor user activity on the Website.
                            </p>
                            <p className="subtitle font-weight-light">
                                Beacons: Acquire Interactive’s mailings may contain web beacons, or a piece of
                                computer programming code that is used to associate a user’s interaction with our mailings,
                                in order to tailor future campaigns to the user’s preferences. A web beacon is a small image that, when
                                loaded, updates our database records. For example, if you receive an e-mail about car loans and open that message,
                                the database will be updated via the web beacon to indicate your interest in future car loan promotions.
                            </p>
                            <p className="subtitle font-weight-light">
                                Acquire Interactive may also create reports on user demographics and usage patterns for our partners.
                                This information allows our advertisers to market more effectively, and allows our users to receive advertisements
                                that are more pertinent to their interests.
                            </p>
                            <p className="subtitle font-weight-light">
                                Acquire Interactive reserves the right to provide aggregate or group data about our users for lawful
                                purposes. Aggregate or group data is data that describes the demographics, usage or characteristics of
                                our participants as a group.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Data Security</h3>
                            <p className="subtitle font-weight-light">
                                All collected information, not just Sensitive Information, is stored in a technically and
                                physically secure environment. When our registration/application process asks users to enter
                                Sensitive Information, and when we store and transmit such Sensitive Information, that information
                                is encrypted and is protected with SSL encryption software. While we use SSL encryption to protect Sensitive
                                Information online, we also do everything in our power to protect PII (including Sensitive Information) off-line.
                                Unfortunately, no data transmission over the Internet can be guaranteed to be 100% secure. As a result, while we strive
                                to protect our customers’ PII, we cannot ensure or warrant the security of any information that you transmit to us,
                                and you do so at your own risk.
                            </p>
                            <p className="subtitle font-weight-light">
                                Once we receive the transmission of your PII, we make reasonable efforts to ensure its security on our systems.
                                Access to this information is strictly limited, and not accessible to the public. All of our customers’ PII is
                                restricted in our offices. Only employees who need the information to perform a specific job (for example a customer
                                service representative) are granted access to PII. Employees not adhering to our policies are subject to disciplinary
                                action. In compliance with applicable federal and state law, we shall notify you and any applicable regulatory agencies
                                in the event that we learn of an information security breach with respect to your PII. You will be notified via
                                e-mail in the event of such a breach. Please be advised that notice may be delayed in order to address the needs of
                                law enforcement, determine the scope of network damage, and to engage in remedial measures.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Right to Opt Out</h3>
                            <p className="subtitle font-weight-light">
                                You may opt-out of receiving communications from us and or our third-party associates by not submitting your information.
                                During registration and/or when you submit personally identifiable information to us at the website, you have opted-in to
                                request that we share your personal information with third parties to receive marketing communications for the specific purposes of
                                receiving offers that you have applied for on our websites. When contacted by any of these companies or third parties,
                                you should notify them directly of your choices regarding their use and sharing of your information and to opt-out of receiving
                                additional offers from them or any other third party with whom we have shared your information (see “Use of Information” above).
                                As noted, we use personal information to provide promotional offers through direct marketing, including without limitation e-mail, telephone,
                                or SMS Messages Service to our website users. We may maintain separate e-mail lists for different purposes. If e-mail recipients wish to
                                end their e-mail subscription from a particular list, they need to follow the instructions at the end of each e-mail message to
                                unsubscribe from the particular list. To opt-out from receiving any additional email communications regarding the website,
                                please send your request in writing via email to privacy@acquireinteractive.com.
                            </p>
                        </div>
                        <div className="mt-2 relevant-info"><h3 className="font-weight-bold pb-3">Do not sell my personal information</h3>
                            <p className="subtitle font-weight-light">
                                You may also opt-out of having your personally identifiable information sold to third-parties.
                                During registration and/or when you submit personally identifiable information to us at the website,
                                you have opted-in to request that we share your personal information with third parties,
                                including Loan Providers and/or other financial service providers for the specific purposes of
                                receiving offers that you have applied for on our websites. When contacted by any of these companies or
                                third parties, you should notify them directly of your choices regarding their use and sharing of your information.
                                Please note that if you opt-out of having your personally identifiable information sold to third-parties,
                                including Loan Providers and/or other financial service providers, you will not be able to receive the services
                                sought for which you originally visited this website.
                            </p>
                            <p className="subtitle font-weight-light">
                                To opt-out from having your personally identifiable information sold to third-parties, including Loan
                                Providers and/or other financial service providers, please send your request in writing via email to
                                privacy@acquireinteractive.com or via postal mail to Acquire Interactive, LLC, 325 East Warm Springs Rd,
                                Suite 210, Las Vegas, NV 89119.
                            </p>
                            <p className="subtitle font-weight-light">
                                In addition, please note that if you subsequently sign up at one of our other websites for other product or service offerings,
                                you will need to again address any information sharing preferences that you had previously established through this website.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Access to Personally Identifiable Information</h3>
                            <p className="subtitle font-weight-light">
                                We will retain your information for as long as needed to provide you services. If you would like to review,
                                update or remove your personally identifiable information, you may submit your request by contacting us at
                                privacy@acquireinteractive.com, sending your request via postal mail to Acquire Interactive, LLC, 325 East Warm Springs Rd,
                                Suite 210, Las Vegas, NV 89119. In order for us to process your request, we will need to be able to verify your identity to the
                                extent necessary to ensure that you are the person you represent yourself to be. As appropriate under the circumstances of the request,
                                you may be required to comply with one of the following identification verification methods:
                            </p>
                            <p className="subtitle font-weight-light">
                                1. Certification of Identity: Provision of a completed Certification of Identity. A template certification of identity is available here.
                            </p>
                            <p className="subtitle font-weight-light">
                                2. Official Photo Identification: Provision of an official photo identification, which includes, but is not limited to, the following:
                            </p>
                            <p className="subtitle font-weight-light">
                                - A valid driver’s license.
                            </p>
                            <p className="subtitle font-weight-light">
                                - An unexpired passport.
                            </p>
                            <p className="subtitle font-weight-light">
                                - An unexpired federal government-issued employee identification card.
                            </p>
                            <p className="subtitle font-weight-light">
                                You will be provided a reasonable amount of time to provide sufficient identity verification. Any request may be
                                denied for lack of sufficient identity verification.
                            </p>
                            <p className="subtitle font-weight-light">
                                To stop receiving future communications from the Website, please Click Here To opt-out of having your
                                information shared with third parties, please Click Here. We use personal information to provide promotional offers sent
                                via e-mail to individuals. We may maintain separate e-mail lists for different purposes. If you wish to end your e-mail
                                subscription from a particular list, follow the instructions which are given at the end of each e-mail message to
                                unsubscribe from the particular list. If you choose to Acquire Interactive, please send your request in writing via e-mail to
                                privacy@acquireinteractive.com
                            </p>
                            <p className="subtitle font-weight-light">
                                It is important to note that if you subsequently sign up at one of our other websites for other product or service offerings,
                                you will need to again address any information sharing preferences that you had previously established through this Website.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Children’s Privacy</h3>
                            <p className="subtitle font-weight-light">
                                Protecting children’s privacy is very important to us. We do not collect or maintain information on our Website from
                                individuals that we actually know are under eighteen (18) years of age. No part of our Website is structured to attract
                                anyone under eighteen (18) years of age. If we determine that we have inadvertently collected PII from someone under eighteen
                                (18) years of age, we will take reasonable steps to purge this information from our database. We encourage parents and guardians to
                                spend time online with their children and to participate and monitor the Internet activities of their children.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Contact Us</h3>
                            <p className="subtitle font-weight-light">
                                Should you have other questions or concerns about this Privacy Policy or our information collection,
                                storage or use practices, please send us an e-mail at privacy@acquireinteractive.com
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Changes to the Privacy Policy</h3>
                            <p className="subtitle font-weight-light">
                                We reserve the right to change or update this Privacy Policy at any time by posting a clear and conspicuous
                                notice on the Website explaining that we have updated our Privacy Policy. If the manner in which we use PII changes,
                                we will notify you by posting the changes on the Website and sending you an e-mail notification advising you of the changes,
                                and providing you with the opportunity to opt-out of the provisions relating to the transfer of your PII. Other than where you opt-out,
                                continued use of the Website and/or acceptance of the e-mail communications following notification of changes to this Privacy Policy will
                                constitute your acceptance of any and all changes.
                            </p>
                        </div>
                        <div className="mt-2"><h3 className="font-weight-bold pt-5 pb-3">Notices</h3>
                            <p className="subtitle font-weight-light">
                                In the event that we need to contact you or send you a notification for any reason, we may notify you of by means of a general
                                notice on this Site, electronic mail to your e-mail address on our records, or by written communication sent by first class mail
                                to your address on our records.
                            </p>
                            <p className="subtitle font-weight-bold">Last Updated: February 1, 2020</p>
                        </div>

                    </div>
                </div>
            </div>
            <FooterComponent/>
        </div>
    )
};

export default PrivacyPolicyComponent;
