/*
 *This is the editor page with virtual scroll.
 */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Virtuoso } from 'react-virtuoso';

import { setJsonData } from 'store/actionCreators';
import ItemPreviewWithEditor from 'components/ItemPreviewWithEditor/ItemPreviewWithEditor';
import { formatObject } from 'shared/utils';
import jsonData from 'examples/example-2.json';
import { Header, ListContainer, containerStyles } from './PreviewWithEditor.styled';
// import jsonData from 'examples/example-1.json';

const PreviewWithEditorVirtualized = (): JSX.Element => {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state);
  const stateKeys = Object.keys(editorState);

  useEffect(() => {
    const data = jsonData.reduce((acc, item) => ({ ...acc, [item.id]: formatObject(item) }), {});

    dispatch(setJsonData(data));
  }, [dispatch]);

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
