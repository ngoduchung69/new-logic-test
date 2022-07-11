import useLocalStorage from "../../customHooks/useLocalStorage";
import RecordBox from "../../components/RecordBox";
import {allowArray} from '../../configs/constant'
import {
  RecordTitle,
  ListItem,
  ListContainer,
  RecordLanguage,
  IconBox,
  StyledCheckOutlined,
  StyledCloseOutlined,
  ListWrapper,
} from "../../assets/styles/consents/consents-styles";

const ListRecords = () => {
  const [record, setRecord] = useLocalStorage("record", []);
  return (
    <ListContainer>
      <ListItem>
        <h3>Detail</h3>
        <h3>Consent Given</h3>
      </ListItem>
      <ListWrapper>
        {record.map(({ userInfo, base64, answer }, index) => (
          <ListItem bgType={index % 2 === 0} key={index}>
            <div>
              <RecordTitle>{userInfo.name}</RecordTitle>
              <RecordLanguage>
                {userInfo?.language?.selectedTitle}
              </RecordLanguage>
            </div>
            <IconBox>
              {allowArray.yes.includes(answer) ? (
                <StyledCheckOutlined />
              ) : (
                <StyledCloseOutlined />
              )}
              <RecordBox small={true} base64={base64} />
            </IconBox>
          </ListItem>
        ))}
      </ListWrapper>
    </ListContainer>
  );
};

export default ListRecords;
