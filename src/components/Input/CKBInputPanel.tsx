import { LoadingOutlined } from "@ant-design/icons";
import React from "react";
import { getDisplayAmount, getFullDisplayAmount } from "../../utils/formatTokenAmount";
import NumericalInput from "./NumericalInput";
import { BI } from "@ckb-lumos/lumos";
import { InputCard, Text, Row } from "../../style/common";
import { ReactComponent as CKBIcon } from "../../asserts/ckb.svg";

interface CKBInputPanelProps {
  value: string;
  onUserInput: (value: string) => void;
  label?: string;
  maxAmount?: string;
  CKBBalance?: string;
  isLoading?: boolean;
  decimals?: number;
  placeholder?: string;
}
export default function CKBInputPanel({
  value,
  onUserInput,
  label,
  CKBBalance,
  isLoading,
  maxAmount: inputMaxAmount,
  decimals = 8,
  placeholder,
}: CKBInputPanelProps) {
  const maxAmount = inputMaxAmount || CKBBalance;

  const handelMaxClick = () => {
    if (!maxAmount) {
      throw new Error("No maxAmount");
    }
    onUserInput(getFullDisplayAmount(BI.from(maxAmount), decimals, { maxDecimalPlace: 8 }));
  };
  return (
    <InputCard>
      <Row className="first-row">
        <Text>{label}</Text>
        <Text className="balance" onClick={handelMaxClick}>
          Max:{" "}
          {isLoading || CKBBalance === undefined ? (
            <LoadingOutlined />
          ) : (
            getDisplayAmount(BI.from(CKBBalance), decimals)
          )}
        </Text>
      </Row>
      <Row className="second-row">
        <NumericalInput
          className="token-amount-input"
          value={value}
          placeholder={placeholder || "Minimum 400 CKB"}
          onUserInput={(val) => {
            onUserInput(val);
          }}
        />
        <CKBIcon />
        <Text className="symbol">CKB</Text>
      </Row>
    </InputCard>
  );
}
