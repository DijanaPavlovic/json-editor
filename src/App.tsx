import styled from 'styled-components';

// import PreviewWithEditor from 'pages/PreviewWithEditor/PreviewWithEditor';
import PreviewWithEditor from 'pages/PreviewWithEditor/PreviewWithEditorVirtualized';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 976px;
  margin: auto;
  padding: 0 24px;
`;

const App = (): JSX.Element => (
  <AppContainer>
    <PreviewWithEditor />
  </AppContainer>
);

export default App;
