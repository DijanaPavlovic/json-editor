import { PropertyValue } from 'shared/types';
import { Preview } from './ItemPreview.styled';

interface ItemPreviewProps {
  data: Record<string, PropertyValue>;
}

const ItemPreview = ({ data }: ItemPreviewProps): React.ReactElement => (
  <Preview>{JSON.stringify(data, null, 2)}</Preview>
);

export default ItemPreview;
