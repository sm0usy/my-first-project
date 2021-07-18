define(["jquery"], function(e) {
    "use strict";
    function t(e, t) {
        var o = e.serviceCloud
          , a = window.location.pathname.split("/").filter(function(e) {
            return "" !== e
        });
        o.Source_Form__c = a.pop(),
        o.Type_of_Issue__c = "Not Available",
        o.Category__c = "Not Available",
        "undefined" != typeof t && t(o),
        i(o)
    }
    function i(t) {
        function i(e, t) {
            return e[t] || t
        }
        function a(e) {
            return i(_, e)
        }
        for (var r, n, _, s = Object.keys(t), p = 0, l = s.length; l > p; p++)
            r = s[p],
            n = t[r],
            _ = o[r],
            _ && (t[r] = e.isArray(n) ? n.map(a).join(";") : i(_, n))
    }
    var o = {
        Category__c: {
            platform_Application_Muzzled: "Application Muzzled",
            api_app_report: "App causing spam/abuse",
            api_app_transfer: "API Key Transfer",
            api_bad_app: "Bad App Report",
            api_privacy_violation: "User Protection",
            api_streaming: "Elevated Access",
            api_technical: "Technical Support",
            api_general: "General",
            brand_imp: "Brand Impersonation",
            elevated_post_limits: "Elevated POST limits",
            elevated_timeline_limits: "Elevated Timeline Limits",
            impersonation: "User Impersonation",
            partner_accountaccess: "Password",
            partner_hacked: "Hacked",
            partner_inactiveusername: "Username",
            partner_mobile: "Mobile",
            partner_settings: "Troubleshooting",
            partner_suspended: "Suspended",
            partner_fake_followers: "Fake Followers",
            policy_abusive: "Abuse",
            private_info: "Private Information",
            right_to_privacy: "Right to Privacy",
            vine_abuse: "Vine - Abuse",
            vine_accountdelete_pending: "Account Deletion",
            vine_brand_imp: "Vine - Brand Impersonation",
            vine_bugreport: "Troubleshooting",
            vine_feedback: "Feature Request",
            vine_howto: "Troubleshooting",
            vine_pw: "Password",
            vine_suspended: "Vine - Suspension",
            vine_trademark: "Vine - Trademark",
            vine_user_imp: "Vine - User Impersonation",
            violent_threats: "Violent Threats"
        },
        Emergency_Type__c: {
            election_related: "Election Related",
            harm_suicide: "Suicide",
            threat_other_person: "Threat to person",
            threat_place: "Threat to place",
            threat_other: "Other"
        },
        Illegal_Ad_Type__c: {
            lap_adult: "Adult",
            lap_alcohol: "Alcohol",
            lap_drugs: "Drugs",
            lap_endangered: "Endangered",
            lap_finserv: "Financial",
            lap_gambling: "Gambling",
            lap_pharma: "Pharma",
            lap_political: "Political",
            lap_tobacco: "Tobacco",
            lap_business: "Business",
            lap_weapons: "Weapons",
            lap_other: "Other"
        },
        Illegal_Content_Type__c: {
            illegal_tweet: "Tweets",
            illegal_account: "Accounts",
            illegal_media: "Media"
        },
        Type_of_Request__c: {
            account_info_request: "Emergency Account Info",
            content_report: "Illegal Content",
            other_inquiries: "Other Violations"
        },
        How_long_ago__c: {
            time_one_day: "24 hrs",
            time_several_days: "A Few Days",
            time_one_week: "Week",
            time_one_month: "Month",
            time_more_than_month: "Greater than Month"
        },
        Impersonation_How__c: {
            name_use: "Full Name",
            photo_use: "Photo",
            content_use: "Content",
            contactinfo_use: "Contact Info"
        },
        Language__c: {},
        Mobile_App__c: {
            desktop: "My desktop web browser",
            mobile: "My mobile web browser",
            tw_android: "Twitter for Android",
            tw_iphone: "Twitter for iPhone",
            tw_ipad: "Twitter for iPad",
            tw_mac: "Twitter for Mac",
            tw_windows: "Twitter for Windows",
            tweetdeck: "TweetDeck",
            tw_w8: "Twitter for Windows8",
            tw_wp: "Twitter for Windows Phone",
            tw_nokia: "Twitter for Nokia",
            tw_sm: "Twitter for Samsung Mobile",
            tw_st: "Twitter for Samsung Tablet",
            tw_bb: "Twitter for Blackberry",
            tw_sms: "Twitter for SMS",
            tw_ant: "Twitter for Android Tablet",
            vine_ios: "Vine for iOS",
            vine_android: "Vine for Android",
            vine_windows: "Vine for Windows Phone"
        },
        Private_info_posted_what__c: {
            info_type_address_1: "Address",
            info_type_phone_1: "Phone",
            info_type_email_1: "Email",
            info_type_contactinformation_1: "ContactInformation",
            info_type_financial_1: "Financial",
            info_type_id_1: "Id",
            info_type_other_1: "Other"
        },
        Private_info_posted_where__c: {},
        ReportTweet_Client__c: {},
        Representation__c: {
            direct_brand_imp: "Self",
            rep_brand_imp: "Representative",
            self_imp: "Self",
            rep_imp: "Representative",
            tm_direct: "Self",
            tm_rep: "Representative"
        },
        Representative_Authorization__c: {
            le_reporter: "Law Enforcement Rep",
            gov_reporter: "Government Rep"
        },
        Requested_Outcome__c: {
            remove_content: "Remove/withhold content",
            suspend_users: "suspend",
            notify_users: "notify user",
            desired_action_other: "other"
        },
        Reporting_Reason__c: {
            reason_hate_speech: "Hate speech",
            reason_defamation: "defamation",
            reason_safety_security: "safety/security",
            reason_court_order: "enforcement of court order",
            reason_other: "other"
        },
        Requested_Account_Info__c: {
            info_basic: "Basic acct info",
            info_ip_logs: "ip logs",
            info_other: "other"
        },
        Self_posted_elsewhere__c: {
            reporter_posted: "Yes",
            non_reported_posted: "No"
        },
        Source_Form__c: {},
        Type_of_Issue__c: {
            account_info_request: "Emergency Requests",
            adfeedback_illegal: "Illegal",
            adfeedback_misleading: "Misleading",
            adfeedback_offensive: "Offensive",
            adfeedback_other: "Other",
            App_crashes: "Crashes",
            App_feature: "Feature request",
            App_how_to: "Howto",
            App_notifications: "Notifications",
            App_profile_settings: "Settings",
            App_search: "Search",
            App_signin: "Sign in",
            App_tweets: "Tweets",
            buynow_card_declined: "Card Decline",
            buynow_order_question: "Order Issue",
            pwform_can_sms: "Can't email, can SMS",
            content_report: "Removal Requests",
            deactivation_no_access: "Company Lost Access",
            deactivation_reactivating: "Account won't delete",
            deactivation_reuse: "Over 30 days",
            dm_issues: "Not Available",
            facebook_page: "Facebook business page",
            facebook_profile: "Personal Facebook",
            follow_issues: "Following",
            follow_request_issues: "Accepting followers",
            followers_zero: "Follower counts wrong",
            harass_replies: "At Reply",
            harass_fullname: "Name Ref",
            harass_representative: "Auth Rep",
            harass_not_direct: "Offensive",
            harass_other: "Other Ref",
            harass_others: "Others",
            missing_dm_issues: "Missing DMs",
            Mobile_signin: "Sign In",
            Mobile_tweets: "Tweets",
            Mobile_search: "Search",
            Mobile_profile: "Settings",
            Mobile_settings: "Howto",
            Mobile_feature: "Feature request",
            pwemail_not_received: "PW email not received",
            other_inquiries: "Correspondence / Inquiries",
            photos_tweeting: "Tweeting Photos",
            photos_multiple: "Multiple Photos",
            photos_tagging: "Photo Tagging",
            photos_animated: "Animated GIF",
            photos_other: "Other Photo Issue",
            photos_search: "Photos",
            profile_email: "Changing email",
            profile_other: "Other issue",
            profile_photo: "Profile pic",
            profile_protected: "Protected tweets",
            profile_notifications: "Notifications",
            protection_issues: "Account protection",
            purchase: "Not Available",
            pw_phone_block: "Mobile block",
            sms_pwreset: "Mobile reset pin trouble",
            rating_1: "1",
            rating_2: "2",
            rating_3: "3",
            rating_4: "4",
            rating_5: "5",
            reporting_blocked_url: "Can't tweet a link",
            reporting_offensive_image: "Bad image",
            reporting_tco_abuse: "Report t.co abuse",
            reporting_automatic_tweets: "This app is automatically tweeting or following from my account",
            reporting_unsolicited_emails: "I am receiving unsolicited emails/sms from this app",
            reporting_other_issues: "I have other issues with this app",
            reply_issues: "Mentions",
            retweet_issues: "Retweets",
            self_harm: "Not Available",
            SMS_delivery: "Delivery",
            SMS_content: "Content",
            SMS_feature: "Feature request",
            suspended: "Not Available",
            third_party_issues: "3rd party app",
            tweet_issues: "Tweets",
            twitter_archive: "Not Available",
            twitter_archive_confirm_email: "Confirming email",
            twitter_archive_email_data_no: "Missing info",
            twitter_archive_email_link: "Not receiving email",
            account_typo: "System email typo",
            web_search: "Search",
            multiple_atreply: "Multiple Atreply",
            offensive_atreply: "Offensive Atreply",
            unwanted_atreply: "Unwanted Atreply"
        },
        Type_of_Platform_Request__c: {
            api_app_report: "Application causing spam/abuse",
            platform_Application_Muzzled: "Application muzzled",
            api_app_transfer: "Transfer an API key",
            api_streaming: "Elevated access to Streaming API",
            api_general: "Other API Policy question",
            api_bad_app: "Bad App",
            api_privacy_violation: "User Protection",
            elevated_post_limits: "Elevated POST Limits",
            elevated_timeline_limits: "Elevated Timeline Limits",
            update_use_case: "Update Use Case"
        },
        What_are_you_reporting__c: {
            multiple_atreply: "Multi Account",
            offensive_atreply: "Offensive (Non At Reply)",
            unwanted_atreply: "Unwanted At Reply"
        },
        Where_Displayed__c: {
            media_avatar: "Avatar",
            media_background: "Background",
            media_header: "Header",
            media_tweet: "Tweet"
        }
    };
    return {
        fillServiceCloud: t
    }
});
