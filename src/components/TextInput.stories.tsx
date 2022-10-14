import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRoot } from "./TextInput";
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='PlaceHolder Text' />

            </>
        ),
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextInputRoot>

export const Default: StoryObj<TextInputRoot> = {}

export const WithioutIcon: StoryObj<TextInputRoot> = {

    args: {
        children: <TextInput.Input placeholder='PlaceHolder Text' />
    }
}