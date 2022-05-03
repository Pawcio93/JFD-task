import React from "react";
import styled from "styled-components";

class App extends React.Component {
  render() {
    return <Monitor {...monitorData} />;
  }
}

export default App;

class Monitor extends React.Component {
  render() {
    const { description, textIsRequired1, sendConfirmation, yesNo, surname1, textIsRequired2, vatValue, chooseVat, surname2 } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="monitorscreen">
          <Description>{description}</Description>
          <OverlapGroup1>
            <TextIsRequired>{textIsRequired1}</TextIsRequired>
          </OverlapGroup1>
          <RadioButton>
            <SendConfirmation>{sendConfirmation}</SendConfirmation>
            <FlexRow>
              <OnOffFalseDisabledFalse />
              <YesNo>{yesNo}</YesNo>
            </FlexRow>
          </RadioButton>
          <Surname>{surname1}</Surname>
          <OverlapGroup2>
            <TextIsRequired>{textIsRequired2}</TextIsRequired>
          </OverlapGroup2>
          <Surname>{vatValue}</Surname>
          <OverlapGroup2>
            <ChooseVat>{chooseVat}</ChooseVat>
          </OverlapGroup2>
          <Surname>{surname2}</Surname>
          <DescriptionTextarea></DescriptionTextarea>
          <SmallButton src="small-button.svg" />
        </div>
      </div>
    );
  }
}

const Description = styled.div`
  ${SansserifBoldWhite12px}
  min-height: 14px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 40px;
  margin-top: 3px;
  margin-left: 2px;
  display: flex;
  padding: 0 6px;
  align-items: center;
  min-width: 368px;
  background-color: var(--white);
  border-radius: 5px;
`;

const TextIsRequired = styled.div`
  ${SansserifBoldLicorice10px}
  min-height: 12px;
  min-width: 81px;
  letter-spacing: 0;
`;

const RadioButton = styled.div`
  ${SansserifBoldWhite12px}
  width: 118px;
  margin-top: 8px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 41px;
`;

const SendConfirmation = styled.div`
  min-height: 14px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  height: 24px;
  position: relative;
  margin-top: 3px;
  display: flex;
  align-items: center;
  min-width: 75px;
`;

const YesNo = styled.div`
  min-height: 14px;
  margin-left: 8px;
  min-width: 43px;
  letter-spacing: 0;
`;

const Surname = styled.div`
  ${SansserifBoldWhite12px}
  min-height: 14px;
  margin-top: 8px;
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 40px;
  margin-top: 8px;
  display: flex;
  padding: 0 9px;
  align-items: center;
  min-width: 368px;
  background-color: var(--white);
  border-radius: 5px;
`;

const ChooseVat = styled.div`
  ${SansserifBoldLicorice10px}
  min-height: 12px;
  min-width: 58px;
  letter-spacing: 0;
`;

const DescriptionTextarea = styled.div`
  width: 368px;
  height: 40px;
  margin-top: 13px;
  margin-left: 2px;
  background-color: var(--white);
  border-radius: 5px;
`;

const SmallButton = styled.img`
  width: 140px;
  height: 43px;
  margin-top: 30px;
  margin-left: 118px;
`;

class OnOffFalseDisabledFalse extends React.Component {
  render() {
    return (
      <RadioButton>
        <Container></Container>
      </RadioButton>
    );
  }
}

const RadioButton = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
`;

const Container = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 2px solid #636366;
`;

export const SansserifBoldWhite12px = css`
  color: var(--white);
  font-family: var(--font-family-sansserif-bold);
  font-size: var(--font-size-m);
  font-weight: 700;
  font-style: normal;
`;

export const SansserifBoldLicorice10px = css`
  color: var(--licorice);
  font-family: var(--font-family-sansserif-bold);
  font-size: var(--font-size-s);
  font-weight: 700;
  font-style: normal;
`;
const monitorData = {
  description: "Description",
  textIsRequired1: "text is required",
  sendConfirmation: "Send confirmation",
  yesNo: "Yes/No",
  surname1: "Price netto EUR",
  textIsRequired2: "text is required",
  vatValue: "VAT value",
  chooseVat: "Choose vat",
  surname2: "Price brutto EUR",
};
