// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.19;

import "./BridgeBase.sol";

contract BridgeTnt is BridgeBase {
    constructor(address token) BridgeBase(token) {}
}
