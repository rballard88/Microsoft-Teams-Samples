import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignatureList } from '.';

export default {
  title: 'Signatures',
  component: SignatureList,
} as ComponentMeta<typeof SignatureList>;

const Template: ComponentStory<typeof SignatureList> = (args) => (
  <SignatureList {...args} />
);

export const List = Template.bind({});
List.args = {
  documentId: '12300000-0000-0000-0000-000000000001',
  loggedInAadId: '00000000-0000-0000-0000-000000000001',
  clickable: true,
  signatures: [
    {
      signer: {
        userId: '00000000-0000-0000-0000-000000000001',
        name: 'Bill Gates',
      },
      text: '',
      id: '10000000-0000-0000-0000-000000000001',
      signedDateTime: new Date(0),
      isSigned: false,
    },
    {
      signer: {
        userId: '00000000-0000-0000-0000-000000000002',
        name: 'Satya Nadella',
      },
      text: '',
      id: '1000000-0000-0000-0000-000000000002',
      signedDateTime: new Date(0),
      isSigned: false,
    },
  ],
};
