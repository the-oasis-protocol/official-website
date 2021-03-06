import Head from "next/head";
import Particles from "react-particles-js";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import en from "../config/en";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const ParticlesParams = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    color: {
      value: "#000",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#999",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true,
      anim: {
        enable: false,
        speed: 80,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 300,
      color: "#ccc",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  retina_detect: true,
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "cn",
  interpolation: {
    escapeValue: false,
  },
});

export default function Home() {
  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  useEffect(() => {
    const cacheLang = localStorage.getItem("lang");
    if (cacheLang && cacheLang !== lang) {
      setLang(cacheLang);
      i18n.changeLanguage(cacheLang);
    }
  });

  function changeLang(e) {
    const lang = e.target.value;
    setLang(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  let langText = "";
  if (lang === "cn") langText = "中文";
  else if (lang === "en") langText = "EN";

  return (
    <div className="container">
      <Head>
        <title>
          {t("绿洲协议")}- {t("跨合约NFT资产转移")}
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="绿洲协议 资产转移 THE OASIS protocol blockchain NFT crypto asset"
        />
        <meta
          name="description"
          content="绿洲协议，带您进入NFT资产生态 / THE OASIS protocl. Bring you to the ecosystem of NFT asset"
        />
        <meta name="author" content="byterum" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="robots" content="index,follow" />
        <meta name="google" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="verify" content="index,follow" />
        {/* <!--Inter UI font--> */}
        <link href="https://rsms.me/inter/inter-ui.css" rel="stylesheet" />
        {/* <!--vendors styles--> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* <!-- Bootstrap CSS / Color Scheme --> */}
        <link rel="stylesheet" href="css/default.css" id="theme-color" />

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-169399144-1"
        ></script>
        <script>
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-169399144-1');
  `}
        </script>
      </Head>

      {/* <!--navigation--> */}
      <div className="smart-scroll">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand heading-black" href="/">
              THE OASIS
            </a>
            <button
              className="navbar-toggler navbar-toggler-right border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span data-feather="grid"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#features">
                    {t("特性")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#dapps">
                    Dapp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#community">
                    {t("社区")}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll" href="#contact">
                    {t("合作")}
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item" style={{ marginTop: 3 }}>
                  <Form.Control
                    as="select"
                    size="sm"
                    value={lang}
                    onChange={changeLang}
                  >
                    <option value="cn">中文</option>
                    <option value="en">English</option>
                  </Form.Control>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/the-oasis-protocol"
                    target="_blank"
                  >
                    <i className="fa fa-github" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <form className="form-inline">
                <a
                  className="btn btn-primary"
                  target="_blank"
                  href="https://docs.theoasis.io"
                >
                  {t("接入文档")}
                </a>
              </form>
            </div>
          </nav>
        </div>
      </div>

      {/* <!--hero header--> */}
      <div className="pt-3" id="home">
        <div className="container-fluid">
          <div className="row vh-md-100">
            <div className="col-md-5 ml-auto my-auto text-center text-md-left">
              <span className="text- text-muted">
                {t("低门槛接入虚拟资产互通的应用生态")}
              </span>
              <h1 className="display-4 mt-2 mb-5">
                THE OASIS - {t("NFT资产跨应用互通")}
              </h1>
              <a
                href="#about"
                className="btn btn-secondary d-inline-flex flex-row align-items-center"
              >
                {t("快速入门")}
                <em
                  data-feather="chevrons-right"
                  width="20"
                  height="20"
                  className="ml-2"
                ></em>
              </a>
            </div>
            <div className="col-md-6 my-auto pt-5 pt-md-0">
              <Particles height={500} params={ParticlesParams} />
            </div>
          </div>
        </div>
      </div>

      {/* <!--about div--> */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mr-auto text-center text-md-left lead">
              <p>
                {t(
                  "THE OASIS协议是一套基于区块链的协议与工具套件。它实现了基于NFT（非同质化通证）的虚拟资产在不同合约间的转移与复用，并提供了封装优良的资产复用、解析工具包"
                )}
              </p>
            </div>
            <div className="col-md-5 ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 mx-auto text-center">
                    <h2>{t("现已支持")}</h2>
                  </div>
                </div>
                <div className="row mt-5 mb-7">
                  {/* <div className="col-md-5 mx-auto text-right">
                    <img src="img/ethereum.png" width="70" />
                  </div> */}
                  <div className="col-md-5 mx-auto text-center">
                    <img src="img/eosio.png" width="120" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- features div --> */}
      <div id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row feature-boxes">
                <div className="col-md-6 box">
                  <div className="icon-box">
                    <div className="icon-box-inner text-primary">
                      <i className="fa fa-file-text-o" />
                    </div>
                  </div>
                  <h5>{t("通用资产标准")}</h5>
                  <Trans i18nKey="standardAsset">
                    <p className="text-muted">
                      THE OASIS制定了具备可扩展性良好的<strong>FT/NFT</strong>
                      标准接口，并提供完善的合约模板
                    </p>
                  </Trans>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box">
                    <div className="icon-box-inner text-primary">
                      <i className="fa fa-exchange" />
                    </div>
                  </div>
                  <h5>{t("跨合约NFT转移")}</h5>
                  <p className="text-muted">
                    {t(
                      "THE OASIS实现了安全、原子的跨合约NFT转移，帮助您的资产穿梭在各种应用的合约层"
                    )}
                  </p>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box">
                    <div className="icon-box-inner text-primary">
                      <i className="fa fa-edit" />
                    </div>
                  </div>
                  <h5>{t("定制化资产映射")}</h5>
                  <p className="text-muted">
                    {t(
                      "您可以自由定制外来NFT在合约内的映射目标资产，以实现更灵活的资产复用"
                    )}
                  </p>
                </div>
                <div className="col-md-6 box">
                  <div className="icon-box">
                    <div className="icon-box-inner text-primary">
                      <i className="fa fa-shield" />
                    </div>
                  </div>
                  <h5>{t("密码学安全")}</h5>
                  <ul className="text-muted list-unstyled">
                    <li>{t("数字签名保障资产完整性，防止篡改资产")}</li>
                    <li>{t("中转合约记录资产位置，防止伪造资产")}</li>
                    <li>{t("全生命周期追踪")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-7">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2>{t("为什么要接入THE OASIS")}</h2>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 mx-auto box text-center">
              <div className="icon-box">
                <div className="icon-box-inner text-primary">
                  <i className="fa fa-users" />
                </div>
              </div>
              <h5>{t("快速冷启动")}</h5>
              <p className="text-muted">
                {t("复用已有应用的资产，快速吸引流量，加速应用冷启动")}
              </p>
            </div>
            <div className="col-md-4 mx-auto box text-center">
              <div className="icon-box">
                <div className="icon-box-inner text-primary">
                  <i className="fa fa-shopping-bag" />
                </div>
              </div>
              <h5>{t("刺激消费")}</h5>
              <ul className="text-muted list-unstyled">
                <li>{t("迫使玩家重复消费道具的时代即将过去")}</li>
                <li>{t("复用性强，使用场景更丰富的资产更容易受到玩家青睐")}</li>
              </ul>
            </div>
            <div className="col-md-4 mx-auto box text-center">
              <div className="icon-box">
                <div className="icon-box-inner text-primary">
                  <i className="fa fa-rocket" />
                </div>
              </div>
              <h5>{t("跨应用联合玩法")}</h5>
              <p className="text-muted">
                {t("带着CryptoKitties的宠物猫游览Decentraland的虚拟世界")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!--dapps div--> */}
      <div className="pt-7" id="dapps">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2>{t("已接入的Dapp")}</h2>
            </div>
          </div>
          <div className="row mt-5 mb-7">
            <div className="col-md-5 mx-auto text-right">
              <a href="https://pandahero.io" target="_blank">
                <img src="img/pandahero.png" width="100" />
              </a>
            </div>
            <div className="col-md-5 mx-auto text-left">
              <img src="img/panda-logo.png" width="100" />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <!--faq--> */}
        <div className="container">
          <div className="row" id="faq">
            <div className="col-md-6 mx-auto text-center">
              <h2>FAQ</h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-10 mx-auto">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <h6>{t("跨应用资产转移需要收费吗？")}</h6>
                  <p className="text-muted">
                    {t(
                      "在合约执行层面只收取区块链交易的手续费，无其他任何费用。应用方也可以在上层构建灵活的付费方案，以拓展更多商业模式。"
                    )}
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>{t("资产转移后会出现丢失情况吗？")}</h6>
                  <p className="text-muted">
                    {t(
                      "资产只在合约有安全漏洞或其他Bug的情况下可能会出现丢失。我们建议用户在审查目标应用的安全性并充分信任后，再进行资产转移的操作。"
                    )}
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>{t("合作方单方面退出生态，资产是否会受影响？")}</h6>
                  <p className="text-muted">
                    {t(
                      "在合作方合约符合THE OASIS协议标准的情况下，任何资产在任何时候都可以转移回它最初的发行合约。"
                    )}
                  </p>
                </div>
                <div className="col-md-6 mb-5">
                  <h6>{t("接入协议后会对资产做什么限制？")}</h6>
                  <p className="text-muted">
                    {t(
                      "协议仅对必要的数据字段做了标准化，其它任何操作均无限制，可由应用方自由扩展。"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--CTA div--> */}
      <div className="py-4 my-4 border-top" id="community">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="card p-4">
                <div className="card-body d-md-flex flex-row align-items-center text-center text-md-left">
                  <div className="mb-4 mb-md-0">
                    <h4>{t("想与更多开发者、应用方交流？")}</h4>
                    <span className="text-muted">
                      {t("好的灵感总是在交流的过程中产生")}
                    </span>
                  </div>
                  <a className="ml-md-auto d-inline-flex flex-row align-items-center">
                    <button className="btn btn-secondary">
                      {t("加入社区")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--contact us--> */}
      <div className="bg-hero py-7" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-md-auto text-center">
              <h1 className="display text-white">{t("申请测试")}</h1>
              <p className="text-muted">{t("请通过邮件与我们取得联系")}</p>
              <a className="lead text-light" href="mailto:contact@byterum.com">
                contact@byterum.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!--footer--> */}
      <footer className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 mr-auto">
              <h6>{t("关于链坊")}</h6>
              <Trans i18nKey="byterumInfo" className="text-muted">
                链坊是一家专注于区块链技术研发的创新科技公司。我们致力于将区块链技术与游戏、文学、艺术等文创领域产品结合，推广通证经济，降低交易摩擦成本，最大化保障用户的利益。
              </Trans>
              <ul className="list-inline social social-rounded social-sm">
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-medium"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <i className="fa fa-telegram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://github.com/the-oasis-protocol"
                    target="_blank"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>{t("相关资源")}</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="https://pandahero.io">{t("竹录隐侠")}</a>
                </li>
                <li>
                  <a href="https://eos.io">EOSIO</a>
                </li>
                <li>
                  <a href="https://dapp.review">DappReview</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>{t("社区")}</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Refer a friend</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>{t("帮助")}</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://github.com/the-oasis-protocol"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#">{t("报告Bug")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 text-muted text-center small-xl">
              THE OASIS&copy;2019-{new Date().getFullYear()}{" "}
              <a href="https://byterum.com">链坊 Byterum</a> - All Rights
              Reserved
            </div>
          </div>
        </div>
      </footer>

      {/* <!--scroll to top--> */}
      <div className="scroll-top">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </div>

      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.0/feather.min.js"></script>
    </div>
  );
}
