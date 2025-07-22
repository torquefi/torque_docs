import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import "./index.module.css";
import styled from "@emotion/styled";

import Discord from "@site/static/img/discord.svg";

import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";

import {
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftIcon,
  CodeBracketIcon,
  BuildingLibraryIcon,
  MapIcon
} from "@heroicons/react/24/outline";

export const actions = [
  {
    title: "Introduction",
    icon: InformationCircleIcon,
    to: "./main/overview/intro",
    text: `What is Torque?`,
  },
  {
    title: "Deployments",
    icon: BookOpenIcon,
    to: "./main/contracts/deployments",
    text: `Build on Torque`,
  },
  {
    title: "Brand Kit",
    icon: BuildingLibraryIcon,
    to: "./main/resources/assets",
    text: `Media assets`,
  }
  /*
  {
    title: "User Guides",
    icon: MapIcon,
    to: "./main/user-guides/using-website/staking",
    text: `How to interact with the protocol`,
  },
  */
];

export const github = [
  // {
  //   title: "torque_sdk",
  //   href: "#",
  //   icon: CodeBracketIcon,
  // },
  {
    title: "torque_fx",
    href: "https://github.com/torquefi/torque_fx",
    icon: CodeBracketIcon,
  },
  {
    title: "torque_widget",
    href: "https://widget.torque.fi",
    icon: CodeBracketIcon,
  },
  {
    title: "torque_sdk",
    href: "https://github.com/torquefi/torque_sdk",
    icon: CodeBracketIcon,
  },
  {
    title: "torque_api",
    href: "https://api.torque.fi",
    icon: CodeBracketIcon,
  },
];

export const Guides = [
  {
    title: "Mint & Redeem",
    text: "On-demand, onchain",
    to: "./main/overview/intro",
    icon: InformationCircleIcon,
  },
  {
    title: "Active Collateral",
    text: "View collateral list",
    to: "./main/contracts/collateral",
    icon: QuestionMarkCircleIcon,
  },
  {
    title: "Exchange & Trading",
    text: "Spot & margin trading",
    to: "./main/overview/dex",
    icon: MapIcon,
  },
  {
    title: "Liquidity Provision",
    text: "An overview of engines",
    to: "./main/overview/engines",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Rewards System",
    text: "Understanding rewards",
    to: "./main/overview/rewards",
    icon: ChatBubbleLeftIcon,
  },
  {
    title: "Staking Guide",
    text: "Staking & earning",
    to: "./main/overview/staking",
    icon: BookOpenIcon,
  },
  {
    title: "Contract Deployments",
    text: "Addresses & networks",
    to: "./main/contracts/deployments",
    icon: CodeBracketIcon,
  },
  {
    title: "Security & Audits",
    text: "View code audits",
    to: "./main/resources/security",
    icon: BuildingLibraryIcon,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 960px;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin: 0 1rem;
    padding: 1rem;
  }
`;

const ThreeRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 960px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const TwoRow = styled(Row)`
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SectionContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 0;
  
  @media (max-width: 960px) {
    padding: 2rem 1rem;
    max-width: 100%;
  }
  @media (max-width: 640px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  min-width: 350px;
  min-height: 180px;
  padding: 1rem;
  padding-bottom: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 20px;
  border: 1px solid var(--ifm-color-emphasis-200);
  /* flex: 1 1 0px; */

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const CompactCard = styled.div`
  display: flex;
  min-width: 250px;
  max-width: none;
  min-height: 60px;
  padding: 1rem;
  padding-bottom: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 16px;
  border: 1px solid var(--ifm-color-emphasis-200);
  flex: 1 1 0px;

  &:hover {
    border: 1px solid var(--ifm-color-emphasis-400);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 960px) {
    width: 100%;
    max-width: none;
    min-width: auto;
    flex: none;
  }
`;

const CenterCard = styled(Card)`
  min-width: 250px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 24px;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    margin-bottom: 0px;
  }
`;

const ShadowCard = styled(Card)`
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff10;
  backdrop-filter: blur(10px);
  min-height: 220px;
  /* background-color: var(--ifm-color-emphasis-0); */
`;

const WideCard = styled(ShadowCard)`
  max-height: auto;

  @media (max-width: 960px) {
    margin: 0 2rem;
    max-height: fit-content;
    width: fit-content;
  }
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const TopSection = styled.div`
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
`;

const LinkRow = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  a h3 {
    color: black !important;
  }
`;

const DocsHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

const StyledImage = styled(ThemedImage)`
  position: relative;
  z-index: -1;
  width: 100%;
  object-fit: cover;
`;

const StyledTitleImage = styled(StyledImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: absolute;
  opacity: 1;
  mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent);
`;

const StyledGithubIcon = styled.div`
  svg {
    fill: var(--ifm-font-color-base);
  }
`;

const HideMedium = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;

const DeveloperRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 960px;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem;
    max-width: 100%;
    margin: 0 1rem;
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin: 0 1rem;
    padding: 1rem;
  }
`;

export default function Home() {
  return (
    <Layout
      title={`Docs`}
      description="Torque Protocol Docs"
    >
      <Container>
        <DocsHeader>
          <div
            style={{
              padding: "4rem 0  ",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontWeight: "600", color: "#FFFFFF"}}> Welcome to Torque</h1>
          </div>
          <StyledTitleImage
            alt="Background"
            sources={{
              light: useBaseUrl("/img/background.png"),
              dark: useBaseUrl("/img/background-dark.png"),
            }}
          />
          <ThreeRow>
            {actions.map((action) => (
              <Link style={{ textDecoration: "none" }} to={action.to}>
                <ShadowCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon style={{ width: "24px" }} />
                    </IconWrapper>

                    <svg
                      style={{ width: "20px", opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </TopSection>
                  <div>
                    <h3 style={{ marginBottom: ".2rem", marginLeft: "0.4rem" }}>{action.title}</h3>
                    <p style={{ marginBottom: "0.5rem", marginLeft: "0.4rem", color: "#959595" }}>{action.text}</p>
                  </div>
                </ShadowCard>
              </Link>
            ))}
          </ThreeRow>
        </DocsHeader>

        <SectionContainer style={{ paddingTop: "6rem" }}>
          <SectionTitle>Getting Started</SectionTitle>
          <Row>
            {Guides.map((action) => (
              <Link
                style={{ textDecoration: "none" }}
                key={action.title}
                to={action.to}
              >
                <CompactCard key={action.title}>
                  <TopSection>
                    <IconWrapper>
                      <action.icon style={{ width: "24px" }} />
                    </IconWrapper>
                    <svg
                      style={{ width: "20px", opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </TopSection>
                  <div>
                    <h3 style={{ marginBottom: ".2rem", marginLeft: "0.4rem" }}>{action.title}</h3>
                    <p style={{ marginBottom: "0.5rem", marginLeft: "0.4rem", color: "#959595" }}>{action.text}</p>
                  </div>
                </CompactCard>
              </Link>
            ))}
          </Row>
        </SectionContainer>

        <SectionContainer style={{ paddingTop: "2rem" }}>
          <SectionTitle>Developer Links</SectionTitle>
          <DeveloperRow>
            {github.map((action) => (
              <Link style={{ textDecoration: "none" }} href={action.href}>
                <CompactCard key={action.title} style={{ justifyContent: "center", alignItems: "center", padding: "0.5rem 1rem" }}>
                  <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 120.78 117.79"
                        style={{ width: "24px" }}
                      >
                        <defs></defs>
                        <title>testlogo</title>
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="Layer_1-2" data-name="Layer 1">
                            <path
                              className="cls-1"
                              d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                            />
                            <path
                              className="cls-2"
                              d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                            />
                            <path
                              className="cls-2"
                              d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                            />
                            <path
                              className="cls-2"
                              d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                            />
                            <path
                              className="cls-2"
                              d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                            />
                            <path
                              className="cls-2"
                              d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                            />
                            <path
                              className="cls-2"
                              d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                            />
                            <path
                              className="cls-2"
                              d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                            />
                          </g>
                        </g>
                      </svg>
                      <h3 style={{ marginBottom: "0rem", marginLeft: "16px" }}>
                        {action.title}
                      </h3>
                    </div>
                    <svg
                      style={{ width: "20px", opacity: 0.2 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17L17 7"/>
                      <path d="M7 7h10v10"/>
                    </svg>
                  </div>
                </CompactCard>
              </Link>
            ))}
          </DeveloperRow>
        </SectionContainer>

        {/* <hr />

        <Row>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://discord.com/invite/DKnbnpnMZ5"}
          >
            <CenterCard>
              <Discord style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Discord</h3>
                <p>Join the Torque community on Discord</p>
              </div>
            </CenterCard>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            href={"https://t.me/torquefi"}
          >
            <CenterCard>
              <ChatBubbleLeftIcon style={{ width: "48px", height: "48px" }} />
              <div>
                <h3>Forum</h3>
                <p>Discuss community governance & more</p>
              </div>
            </CenterCard>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            href={"https://github.com/torquefi"}
          >
            <CenterCard>
              <StyledGithubIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120.78 117.79"
                  style={{ width: "48px" }}
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        className="cls-1"
                        d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z"
                      />
                      <path
                        className="cls-2"
                        d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z"
                      />
                      <path
                        className="cls-2"
                        d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z"
                      />
                      <path
                        className="cls-2"
                        d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z"
                      />
                      <path
                        className="cls-2"
                        d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z"
                      />
                      <path
                        className="cls-2"
                        d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z"
                      />
                      <path
                        className="cls-2"
                        d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z"
                      />
                      <path
                        className="cls-2"
                        d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z"
                      />
                    </g>
                  </g>
                </svg>{" "}
              </StyledGithubIcon>
              <div>
                <h3>GitHub</h3>
                <p>View all of Torque's open-source repositories</p>
              </div>
            </CenterCard>
          </Link>
        </Row> */}
      </Container>
    </Layout>
  );
}
