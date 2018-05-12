import * as React from 'react';
import { AppContext } from './App';

export interface IFooTextProps {
    name?: string;
    onChangeCallback(name: string, newValue: string): void;
}

export default class FooText extends React.Component<IFooTextProps, any> {

    public render() {
        return (
            <div>
                <AppContext.Consumer >
                    {contextValue => (
                        <React.Fragment>
                            <input type="text" onChange={this.handleChange} defaultValue={(contextValue as any).value} />
                        </React.Fragment>
                    )

                    }
                </AppContext.Consumer>
            </div>
        );
    }

    private handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.onChangeCallback(this.props.name!, event.target.value);
        // e.preventDefault()
    }

}
