/**
 * Few examples of inbuilt types:
 * JSX.Element | JSX.Element[];
 * React.ReactNode | React.ReactChildren | React.ReactChild[];
 */

type ContentBlockProps = { children: any };

const ContentBlock = ({ children }: ContentBlockProps) => {
  return (
    <div style={{ padding: "10px", border: "8px solid green" }}>
      {children}
    </div>
  );
};

// we can observe many different children types are being used here
export default function Application() {
  return (
    <ContentBlock>
      Many children...
      Some content (string).
      <p>Some HTML (not nested)</p>
      <ContentBlock>
        <h2>Another React component with its own child (HTML not nested).</h2>
      </ContentBlock>
      <ContentBlock>
        <h2>Component with multiple children</h2>
        <p>multiple children...</p>
      </ContentBlock>
    </ContentBlock>
  );
}
