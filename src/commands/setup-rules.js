const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setup-rules')
        .setDescription('Publica las reglas de RIXZY LEAKS.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setTitle('📜 RIXZY LEAKS — SERVER RULES')
            .setDescription(`
🇪🇸 **REGLAS**

Bienvenido/a a **RIXZY LEAKS**. Al permanecer en este servidor aceptas respetar las siguientes reglas.

**01. 🤝 Respeta a todos**
No se permite acoso, amenazas, discriminación o comportamiento tóxico.

**02. 🚫 No hagas spam**
Evita flood, mensajes repetitivos y menciones excesivas.

**03. 📢 No abuses de @everyone / @here**
Estas menciones están reservadas para anuncios importantes.

**04. 🔗 No publiques contenido malicioso**
No compartas malware, scams, phishing o enlaces peligrosos.

**05. 📁 Usa los canales correctamente**
Publica cada contenido en el canal correspondiente.

**06. 📣 No hagas publicidad sin autorización**
No promociones otros servidores, productos o servicios sin permiso.

**07. 🎫 Utiliza los tickets correctamente**
No abras tickets falsos, repetitivos o innecesarios.

**08. 🛡️ Respeta al Staff**
Si tienes un problema con una decisión, utiliza el sistema de soporte.

**09. ⚠️ No evadas sanciones**
Intentar evitar una sanción mediante cuentas alternativas puede resultar en una sanción adicional.

**10. 🔒 Usa el sentido común**
El Staff puede actuar ante comportamientos que afecten negativamente a la comunidad.

━━━━━━━━━━━━━━━━━━

🇺🇸 **RULES**

Welcome to **RIXZY LEAKS**. By remaining in this server, you agree to follow these rules.

**01. 🤝 Respect everyone**
Harassment, threats, discrimination, and toxic behavior are not allowed.

**02. 🚫 No spam**
Do not flood chats, send repetitive messages, or abuse mentions.

**03. 📢 Do not abuse @everyone / @here**
These mentions are reserved for important announcements.

**04. 🔗 No malicious content**
Do not share malware, scams, phishing, or dangerous links.

**05. 📁 Use the correct channels**
Keep content in the appropriate channels.

**06. 📣 No unauthorized advertising**
Do not advertise other servers, products, or services without permission.

**07. 🎫 Use tickets properly**
Do not create fake, repetitive, or unnecessary tickets.

**08. 🛡️ Respect Staff**
If you disagree with a decision, use the support system.

**09. ⚠️ Do not evade punishments**
Attempting to bypass punishments may result in additional action.

**10. 🔒 Use common sense**
Staff may take action against behavior that negatively affects the community.
            `)
            .setFooter({
                text: 'RIXZY LEAKS • Please follow the rules'
            })
            .setTimestamp();

        await interaction.channel.send({
            embeds: [embed]
        });

        await interaction.reply({
            content: '✅ Rules embed sent successfully.',
            ephemeral: true
        });
    }
};