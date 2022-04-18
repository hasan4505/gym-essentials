import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="blogs-part">
        <h1>Some Basic Question & Answer</h1>
        <h3>What is Context API & When to use?</h3>

        <p>
          The Context API is a component structure provided by the React
          framework used to share data with multiple components, without having
          to pass data through props manually. It’s aimed to solving the problem
          of prop drilling. When we passing data through props over and over, it
          can cause problems our application. If we breaking the components into
          smaller components for maintainability purposes, these small
          components might now need some data to work properly. If these small
          components need some data to work, we will have to pass data through
          props from grandparent to child to parent, and so on. This process can
          slow down our application and cause development issues. That’s why
          Context API came to solve for us.
        </p>
      </div>
      <div className="blogs-part">
        <h3>What are semantic tags in HTML?</h3>

        <p>
          Semantic tags clearly communicated its meaning to both the developer
          and the browser. These tags clearly define its content, that the
          element should contain. These tags also help search engines to parse
          the webpage correctly to finding accurate information. Thus, helping
          search engines and other user devices to correctly index the page. The
          pages made with semantic elements are much easier to read. It has
          greater accessibility. It offers a better user experience.For example,
          header, footer, article are all considered semantic because they
          accurately describe the purpose of the element and the type of content
          that is inside them.
        </p>
      </div>
      <div className="blogs-part">
        <h3>What is the difference between block, inline, and inline-block?</h3>

        <p>
          <b>Block:</b>It displays an element as a block element. It starts on a
          new line and occupy the full width available. We can set its width and
          height values. So that means block elements will occupy the entire
          width of its parent element. Here are a few elements that have a
          default block property: div, h, p, li, section tag. <br></br>
          <b>Inline:</b> These elements don’t start on a new line and only
          occupy just the width it requires. We can’t set its width or height.
          This one displays the element inline or on the same line. In other
          words, inline elements do not start on a new line and only takes up as
          much width as its content. So, if we try to set any width and height,
          it will have no effects.Here are a few elements that have a default
          inline property: span, a, img tag.<br></br>
          <b>Inline-block:</b> It displays an element as an inline-level block
          container. It’s formatted just like the inline element, where it
          doesn’t start on a new line. But, we can set its width and height
          values. It’s essentially the same thing as inline, except that we can
          set height and width values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
