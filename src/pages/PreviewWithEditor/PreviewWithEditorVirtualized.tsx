/*
 *This is the editor page with virtual scroll.
 */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Virtuoso } from 'react-virtuoso';
import styled from 'styled-components';

import { setJsonData } from 'store/actionCreators';
import ItemPreviewWithEditor from 'components/ItemPreviewWithEditor/ItemPreviewWithEditor';
import { formatObject } from 'shared/utils';
import jsonData from 'examples/example-2.json';
// import jsonData from 'examples/example-1.json';

const ListContainer = styled.div`
  max-width: 976px;
  margin: auto;
  padding: 24px;
`;

const Header = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const containerStyles = {
  width: '100vw',
  height: 'calc(100vh - 116px)',
};

const PreviewWithEditorVirtualized = (): JSX.Element => {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state);

  useEffect(() => {
    const data = jsonData.reduce((acc, item) => ({ ...acc, [item.id]: formatObject(item) }), {});

    dispatch(setJsonData(data));
  }, [dispatch]);

  const stateKeys = Object.keys(editorState);

  return (
    <>
      <Header>
        <h2>JSON EDITOR</h2>
        <p>
          You can edit below all fields except the ids and complex fields (like objects and arrays).
        </p>
      </Header>
      <Virtuoso
        components={{ List: ListContainer }}
        style={containerStyles}
        totalCount={stateKeys.length}
        overscan={200}
        itemContent={(index: number) => {
          return <ItemPreviewWithEditor key={stateKeys[index]} id={stateKeys[index]} />;
        }}
      />
    </>
  );
};

export default PreviewWithEditorVirtualized;
