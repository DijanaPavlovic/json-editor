/*
 *This is the editor page without virtual scroll.
 */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setJsonData } from 'store/actionCreators';
import ItemPreviewWithEditor from 'components/ItemPreviewWithEditor/ItemPreviewWithEditor';
import { formatObject } from 'shared/utils';
import jsonData from 'examples/example-2.json';
// import jsonData from 'examples/example-1.json';

const PreviewWithEditor = (): JSX.Element => {
  const dispatch = useDispatch();
  const editorState = useSelector((state) => state);

  useEffect(() => {
    const data = jsonData.reduce((acc, item) => ({ ...acc, [item.id]: formatObject(item) }), {});

    dispatch(setJsonData(data));
  }, [dispatch]);

  return (
    <>
      <h2>JSON EDITOR</h2>
      <p>
        You can edit below all fields except the ids and complex fields (like objects and arrays).
      </p>
      {Object.keys(editorState).map((id) => (
        <ItemPreviewWithEditor key={id} id={id} />
      ))}
    </>
  );
};

export default PreviewWithEditor;
