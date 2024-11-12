import * as React from 'react';

interface IAccountSettingProps {
  children: React.ReactNode;
}

const AccountSetting: React.FunctionComponent<IAccountSettingProps> = ({ children }) => {
  return <>{children}</>;
};

export default AccountSetting;
