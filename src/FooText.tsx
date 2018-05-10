import * as React from 'react';

export interface IFooTextProps {
    name?: string;
    onChangeCallback(name: string, newValue: string): void;
}

export default class FooText extends React.Component<IFooTextProps, any> {

    public render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
            </div>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.onChangeCallback(this.props.name!, event.target.value);
        // e.preventDefault()
    }

}
