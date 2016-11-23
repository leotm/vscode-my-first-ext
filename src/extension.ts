'use strict';

import * as vscode from 'vscode';
import path = require('path');

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.getFilePath', () => {
        var filePath: string = path.dirname(vscode.workspace.textDocuments[0].uri.fsPath);
        vscode.window.showInformationMessage(filePath);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}