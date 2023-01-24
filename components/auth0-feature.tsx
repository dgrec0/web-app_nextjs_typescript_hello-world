import React from "react";
import Image from "next/image";

interface Auth0FeatureProps {
  title: string;
  description: string;
  resourceUrl: string;
  icon: string;
}

export const Auth0Feature: React.FC<Auth0FeatureProps> = ({
  title,
  description,
  resourceUrl,
  icon,
}) => (
  <a
    href={resourceUrl}
    className="auth0-feature"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 className="auth0-feature__headline">
      <Image
        className="auth0-feature__icon"
        src={icon}
        alt="external link icon"
        height={36}
        width={36}
      />
      {title}
    </h3>
    <p className="auth0-feature__description">{description}</p>
  </a>
);
