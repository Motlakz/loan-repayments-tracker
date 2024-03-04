import React from 'react';

const BlogPage = () => {
  const articles = [
    {
      title: 'Simplify Your Finances with Repay Smart',
      content: 'In this digital age, managing finances should be simple and hassle-free. That\'s where our app, Repay Smart, comes in. With its user-friendly interface and powerful features, it takes the stress out of managing your money. From tracking your expenses to setting up budgets, Repay Smart has got you covered. Plus, with our app, you can access your financial information anytime, anywhere, right from the home page.'
    },
    {
      title: 'Stay Informed with Repay Smart\'s Blog',
      content: 'Knowledge is power, especially when it comes to managing your finances. That\'s why Repay Smart offers a regularly updated blog, accessible directly from our app\'s navigation menu. Our blog features articles on a wide range of financial topics, from investment strategies to money-saving tips. Stay informed and make smarter financial decisions with Repay Smart.'
    },
    {
      title: 'Join the Repay Smart Community',
      content: 'When you sign up for Repay Smart, you\'re not just getting a finance management app - you\'re joining a community. Our app offers a variety of ways to connect with other users and share your financial journey. You can sign up or sign in to your account directly from our navigation menu. Once you\'re part of the Repay Smart community, you can share tips, ask questions, and learn from others who are also working towards financial freedom.'
    }
  ];

  const potentialArticles = [
    {
      title: 'Potential Article 1',
      content: 'This is a short description of the potential article 1.'
    },
    {
      title: 'Potential Article 2',
      content: 'This is a short description of the potential article 2.'
    },
    {
      title: 'Potential Article 3',
      content: 'This is a short description of the potential article 3.'
    }
  ];

  return (
    <div className="p-4 mt-24 flex">
      <div className="w-2/3 pr-4">
        <h1 className="text-4xl font-bold mb-4 text-cyan-700">Blog</h1>
        {articles.map((article, index) => (
          <div key={index} className="mb-8 bg-cyan-50 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2 text-cyan-800">{article.title}</h2>
            <p className="text-lg text-cyan-700">{article.content}</p>
          </div>
        ))}
      </div>
      <div className="w-1/3 pl-4">
        <h1 className="text-2xl font-bold mb-4 text-purple-700">Explore</h1>
        {potentialArticles.map((article, index) => (
          <div key={index} className="mb-8 bg-purple-200 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-2 text-purple-800">{article.title}</h2>
            <p className="text-base text-purple-700">{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
