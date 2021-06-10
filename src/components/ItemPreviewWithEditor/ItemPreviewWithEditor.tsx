import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ItemEditor from 'components/ItemEditor/ItemEditor';
import ItemPreview from 'components/ItemPreview/ItemPreview';
import { JsonData } from 'shared/types';
import { updateJsonData } from '../../store/actionCreators';
import { Wrapper } from './ItemPreviewWithEditor.styled';

interface ItemPreviewWithEditorProps {
  id: string;
}

const ItemPreviewWithEditor = ({ id }: ItemPreviewWithEditorProps) => {
  const dispatch = useDispatch();
  const data = useSelector((state: JsonData) => state[id]);

  const handleDataChange = useCallback(
    (event) => {
      const { name: key, value, type } = event.target;
      let finalValue = value;
      if (type === 'number') finalValue = +value;
      else if (type === 'checkbox') finalValue = value === 'false';
      dispatch(updateJsonData({ id, key, value: finalValue }));
    },
    [dispatch, id],
  );

  return (
    <Wrapper>
      <ItemPreview data={data} />
      <ItemEditor data={data} onChange={handleDataChange} />
    </Wrapper>
  );
};

export default memo(ItemPreviewWithEditor);
