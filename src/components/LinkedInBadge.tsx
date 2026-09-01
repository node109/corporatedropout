import Script from "next/script";

export function LinkedInBadge() {
  return (
    <div className="flex justify-center">
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="siddhantsingh01"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/siddhantsingh01?trk=profile-badge"
        >
          Siddhant Singh
        </a>
      </div>
      <Script src="https://platform.linkedin.com/badges/js/profile.js" strategy="lazyOnload" />
    </div>
  );
}
