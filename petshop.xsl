<?xml version="1.0" encoding="UTF-8" standalone="no" ?>

<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0">


    <xsl:template match="/">

        <html lang="en">

            <head></head>
            <body>
                <table id="example" class="table table-striped table-bordered" style="width:100%">

                    <tbody>

                        <xsl:for-each select="/petShopServices/service">
                            <tr>
                                <td>
                                    <xsl:value-of select="petName" />
                                </td>
                                <td>
                                    <xsl:value-of select="animalType" />
                                </td>
                                <td>
                                    <xsl:value-of select="ownerName" />
                                </td>
                                <td>
                                    <xsl:value-of select="ownerPhone" />
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:transform>