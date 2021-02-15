import React from "react";
import ArticleContent from "./ArticleContent";
import { Helmet } from "react-helmet";
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find(article => article.name === name);
  return (
    <>
      <Helmet>
    <meta name="google-site-verification" content="YxQy4XuwrF6iIorC7vGlVbk8WLSFN-C9k8RSQ0ttoTs" />
        <title>{article.title}</title>
        <meta content="{article.desc}" name=" description" />
        <meta content="Laravel POS aplikasi kasir toko grosir dan eceran web apps" property="og:title" />
        <meta content="Mesin kasir online dengan penjualan grosir dan eceran include website web app laravelpos" property="og:description" />
        <meta content="https://1.bp.blogspot.com/-8TDWnq41TuE/Xzt03g86CoI/AAAAAAAALN4/RRO9T2k3or8x4xx6vBDAmdn0lIHLU6oIACLcBGAsYHQ/s1500/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25282%2529.jpg" property="og:image" />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />
        <meta content="Laravel POS aplikasi kasir toko grosir dan eceran web apps" name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta content="https://1.bp.blogspot.com/-8TDWnq41TuE/Xzt03g86CoI/AAAAAAAALN4/RRO9T2k3or8x4xx6vBDAmdn0lIHLU6oIACLcBGAsYHQ/s1500/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25282%2529.jpg" name="facebook:image" />
        <meta content="Laravel POS aplikasi kasir toko grosir dan eceran web apps" property="og:site_name" />
        <meta content="Mesin kasir online dengan penjualan grosir dan eceran include website web app laravelpos" property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content="https://1.bp.blogspot.com/-8TDWnq41TuE/Xzt03g86CoI/AAAAAAAALN4/RRO9T2k3or8x4xx6vBDAmdn0lIHLU6oIACLcBGAsYHQ/s1500/aplikasi%2Btoko%2Bmesin%2Bkasir%2Bonline%2Blaravel%2Bpoint%2Bof%2Bsale%2Bcashier%2Bapps%2B%25282%2529.jpg" name="twitter:image" />
        <meta content="Mesin kasir online dengan penjualan grosir dan eceran include website web app laravelpos" name="twitter:description" />
        <meta content="Laravel POS aplikasi kasir toko grosir dan eceran web apps" name="twitter:title" />
        <meta content="index, follow" name="robots" />
      </Helmet>
      <div className="row">
        <div className="col-12 col-md-12 p-3 p-md-5">
          <div className="shadow rounded p-3 p-md-5 uk-animation-slide-right">
            <img className="img-fluid" src={article.img} />
            <h1>
              <strong>
                <a href="/" className="text-danger">
                  {article.title}
                </a>
              </strong>
            </h1>
            <h3>{article.desc}</h3>
            {article.content.map((paragraph, key) => (
              <p className="lead" key={key}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
