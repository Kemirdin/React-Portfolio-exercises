import React, {Component} from 'react';
import { decorate, observable, configure, action, computed } from "mobx";
import { observer } from "mobx-react";

configure({ enforceActions: true });

class Store {
    employeesList = [{
        name: "kan zaman",
        salary: 1500
    },
    {
        name: "zaman akman",
        salary: 225
    },
    ];

    clearList() {
        this.employeesList = []
    };

    pushEmployee(e) {
        this.employeesList.push(e)
    };

    get totalSum() {
        let sum = 0
        this.employeesList.map(e => sum = sum + e.salary)
        return sum
    }

    get highEarnersCount() {
        return this.employeesList.filter(e => e.salary > 500).length
    }
};

decorate(Store, {
    employeesList: observable,
    clearList: action,
    pushEmployee: action,
    totalSum: computed
});

const appStore = new Store();

const Row = (props) => {
    return (<tr>
        <td> {props.data.name} </td> <td> {props.data.salary} </td> </tr>)
};

        class Table extends Component {
            render() {
                const {store} = this.props
                return ( < div >
                    <table>
                    <thead>
                    <tr>
                                <td> Name: </td> <td> Daily salary: </td> </tr> </thead>
                        <tbody> {store.employeesList.map((e, i) => <Row key={i} data={e} />)}
                        </tbody>
                        <tfoot>
                    <tr>
                                <td > TOTAL: </td> <td > {store.totalSum} </td> </tr> </tfoot> </table>
                        <div className="fade" >
                    You have <u> {store.highEarnersCount}
                    team members </u>that earn more that 500$/day. </div> </div>)
                }
            }
            Table = observer(Table)

            class Controls extends Component {addEmployee = () => {
                            const name = prompt("The name:")
                            const salary = parseInt(prompt("The salary:"), 10)
                            this.props.store.pushEmployee({
                                name,
                                salary
                            })
                        };

                clearList = () => {this.props.store.clearList()};

                render() {
                    return ( < div className = "controls" >
                        <button onClick={this.clearList}> clear table </button>
                        <button onClick={this.addEmployee}> add record </button> </div>)
                    }
                };

                class App extends Component {
                        render()
                     {
                        return ( <div >
                        <h1 > Mobx Table </h1> <Controls store={appStore} />
                        <Table store={appStore} /> </div>
                        )
                    }
                };

                export default App;
