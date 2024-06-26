import React from "react";

// Low Level Content 5 shows a list of ASCII codes in a table discussing how uppercase letters 
// have a different code to lowercase.
const LowLevelContent5 = () => {
    
    // styles the header of the table
    const tableHeaderStyle = {
        backgroundColor: "#2eba68", // Set the background color to green
        color: "white", // Set the text color to white for better contrast
    };
    
    // styles an alternate header for the table to distinguish between columns
    const altTableHeaderStyle = {
        backgroundColor: "#258a4f",
        color: "white",
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col p-3 mx-2">
                    <p>Here is a table of ASCII codes:</p>
                    <p>As you can see, uppercase letters have a different ASCII code to lowercase letters.</p>
                    <table className="table table-bordered" style={{fontSize: "10pt"}}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Code</th>
                                <th style={altTableHeaderStyle}>Character</th>
                                <th style={tableHeaderStyle}>Code</th>
                                <th style={altTableHeaderStyle}>Character</th>
                                <th style={tableHeaderStyle}>Code</th>
                                <th style={altTableHeaderStyle}>Character</th>
                                <th style={tableHeaderStyle}>Code</th>
                                <th style={altTableHeaderStyle}>Character</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td> </td>
                                <td>33</td>
                                <td>!</td>
                                <td>66</td>
                                <td>B</td>
                                <td>99</td>
                                <td>c</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td>34</td>
                                <td>"</td>
                                <td>67</td>
                                <td>C</td>
                                <td>100</td>
                                <td>d</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>35</td>
                                <td>#</td>
                                <td>68</td>
                                <td>D</td>
                                <td>101</td>
                                <td>e</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>36</td>
                                <td>$</td>
                                <td>69</td>
                                <td>E</td>
                                <td>102</td>
                                <td>f</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>37</td>
                                <td>%</td>
                                <td>70</td>
                                <td>F</td>
                                <td>103</td>
                                <td>g</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td></td>
                                <td>38</td>
                                <td>&</td>
                                <td>71</td>
                                <td>G</td>
                                <td>104</td>
                                <td>h</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td></td>
                                <td>39</td>
                                <td>'</td>
                                <td>72</td>
                                <td>H</td>
                                <td>105</td>
                                <td>i</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Bell</td>
                                <td>40</td>
                                <td>(</td>
                                <td>73</td>
                                <td>I</td>
                                <td>106</td>
                                <td>j</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Backspace</td>
                                <td>41</td>
                                <td>)</td>
                                <td>74</td>
                                <td>J</td>
                                <td>107</td>
                                <td>k</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td></td>
                                <td>42</td>
                                <td>*</td>
                                <td>75</td>
                                <td>K</td>
                                <td>108</td>
                                <td>l</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>New line</td>
                                <td>43</td>
                                <td>+</td>
                                <td>76</td>
                                <td>L</td>
                                <td>109</td>
                                <td>m</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td></td>
                                <td>44</td>
                                <td>,</td>
                                <td>77</td>
                                <td>M</td>
                                <td>110</td>
                                <td>n</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>New page</td>
                                <td>45</td>
                                <td>-</td>
                                <td>78</td>
                                <td>N</td>
                                <td>111</td>
                                <td>o</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Return</td>
                                <td>46</td>
                                <td>.</td>
                                <td>79</td>
                                <td>O</td>
                                <td>112</td>
                                <td>p</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Shift (in)</td>
                                <td>47</td>
                                <td>/</td>
                                <td>80</td>
                                <td>P</td>
                                <td>113</td>
                                <td>q</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Shift (out)</td>
                                <td>48</td>
                                <td>0</td>
                                <td>81</td>
                                <td>Q</td>
                                <td>114</td>
                                <td>r</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td></td>
                                <td>49</td>
                                <td>1</td>
                                <td>82</td>
                                <td>R</td>
                                <td>115</td>
                                <td>s</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td></td>
                                <td>50</td>
                                <td>2</td>
                                <td>83</td>
                                <td>S</td>
                                <td>116</td>
                                <td>t</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td></td>
                                <td>51</td>
                                <td>3</td>
                                <td>84</td>
                                <td>T</td>
                                <td>117</td>
                                <td>u</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td></td>
                                <td>52</td>
                                <td>4</td>
                                <td>85</td>
                                <td>U</td>
                                <td>118</td>
                                <td>v</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td></td>
                                <td>53</td>
                                <td>5</td>
                                <td>86</td>
                                <td>V</td>
                                <td>119</td>
                                <td>w</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td></td>
                                <td>54</td>
                                <td>6</td>
                                <td>87</td>
                                <td>W</td>
                                <td>120</td>
                                <td>x</td>
                            </tr>
                            <tr>
                                <td>22</td>
                                <td></td>
                                <td>55</td>
                                <td>7</td>
                                <td>88</td>
                                <td>X</td>
                                <td>121</td>
                                <td>y</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td></td>
                                <td>56</td>
                                <td>8</td>
                                <td>89</td>
                                <td>Y</td>
                                <td>122</td>
                                <td>z</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td></td>
                                <td>57</td>
                                <td>9</td>
                                <td>90</td>
                                <td>Z</td>
                                <td>123</td>
                                <td>&#123;</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td></td>
                                <td>58</td>
                                <td>:</td>
                                <td>91</td>
                                <td>&#91;</td>
                                <td>124</td>
                                <td>|</td>
                            </tr>
                            <tr>
                                <td>26</td>
                                <td></td>
                                <td>59</td>
                                <td>;</td>
                                <td>92</td>
                                <td>\</td>
                                <td>125</td>
                                <td>&#125;</td>
                            </tr>
                            <tr>
                                <td>27</td>
                                <td>Escape</td>
                                <td>60</td>
                                <td>˂</td>
                                <td>93</td>
                                <td>&#93;</td>
                                <td>126</td>
                                <td>~</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td></td>
                                <td>61</td>
                                <td>=</td>
                                <td>94</td>
                                <td>^</td>
                                <td>127</td>
                                <td>_</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td></td>
                                <td>62</td>
                                <td>˃</td>
                                <td>95</td>
                                <td>_</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td></td>
                                <td>63</td>
                                <td>?</td>
                                <td>96</td>
                                <td>'</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>31</td>
                                <td></td>
                                <td>64</td>
                                <td>@</td>
                                <td>97</td>
                                <td>a</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>32</td>
                                <td>Space</td>
                                <td>65</td>
                                <td>A</td>
                                <td>98</td>
                                <td>b</td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LowLevelContent5;
