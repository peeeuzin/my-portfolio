import React, { useEffect } from 'react';
import styles from './styles.module.scss';

function TerminalComponent() {
    const startTyping = async () => {
        const getContentElement = document.getElementById('terminalContent');
        if (!getContentElement) return;
        function addElement(element: HTMLElement) {
            if (getContentElement) {
                getContentElement.appendChild(element);
            }
        }

        function writeLine(text: string) {
            const element = document.createElement('span');
            element.innerHTML = text;
            addElement(element);
            const breakLine = document.createElement('br');
            addElement(breakLine);

            return element;
        }

        function write(text: string) {
            const element = document.createElement('span');
            element.innerHTML = text;
            addElement(element);

            return element;
        }

        async function bashIcon() {
            write('$ ');
            await new Promise((resolve) => setTimeout(resolve, 500));
        }

        getContentElement.innerHTML = ''; // clear the console

        await bashIcon();

        const commands = ['npm install pedrinfx --save', 'node index.js'];

        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];

            const element = document.createElement('span');
            element.id = `${i}`;
            addElement(element);

            for (let o = 0; o < command.length; o++) {
                const letter = command[o];

                element.innerHTML += letter;
                await new Promise((resolve) =>
                    setTimeout(resolve, 150 * Math.random())
                );
            }

            const breakLine = document.createElement('br');
            addElement(breakLine);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            if (i + 1 !== commands.length) await bashIcon();
        }

        const ageDifMs = Date.now() - new Date('08/18/2006').getTime();
        const ageDate = new Date(ageDifMs);

        writeLine("pedrinfx's name: Pedro Augusto");
        writeLine(
            `pedrinfx's age: ${Math.abs(ageDate.getUTCFullYear() - 1970)}`
        );
        writeLine(
            "pedrinfx's skills: ['Typescript/Javascript', 'CSS', 'HTML', 'Elixir', 'C#', 'Node.js', 'Jest', 'Next.js', 'React']"
        );
        writeLine("pedrinfx's is current learning: Rust");

        await bashIcon();
    };

    useEffect(() => {
        startTyping();
    }, []);

    return (
        <div className={styles.terminal}>
            <div className={styles.header}>
                <div
                    style={{
                        background: '#E96379',
                        width: 12,
                        height: 12,
                        borderRadius: 99,
                        marginRight: 5,
                    }}
                />
                <div
                    style={{
                        background: '#E7DE79',
                        width: 12,
                        height: 12,
                        borderRadius: 99,
                        marginRight: 5,
                    }}
                />
                <div
                    style={{
                        background: '#67E480',
                        width: 12,
                        height: 12,
                        borderRadius: 99,
                        marginRight: 5,
                    }}
                />
            </div>
            <div className={styles.content} id="terminalContent"></div>
        </div>
    );
}

export { TerminalComponent };
