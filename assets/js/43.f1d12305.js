(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{303:function(e,t,a){"use strict";a.r(t);var s=a(15),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-on-debian-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-on-debian-8"}},[e._v("#")]),e._v(" Docker on Debian 8")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#install-docker"}},[e._v("Install Docker")])]),t("li",[t("a",{attrs:{href:"#update-grub-startup"}},[e._v("Update GRUB Startup")])]),t("li",[t("a",{attrs:{href:"#add-backports-repo"}},[e._v("Add Backports Repo")])]),t("li",[t("a",{attrs:{href:"#update-software-setup-docker"}},[e._v("Update Software & Setup Docker")])])])]),t("p"),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("There is a potential for broken software after this upgrade as we are moving to a non-stable kernel (in regards\nto mainline Debian). Please take backups and only proceed if you are comfortable with this process.")])]),e._v(" "),t("h2",{attrs:{id:"install-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[e._v("#")]),e._v(" Install Docker")]),e._v(" "),t("p",[e._v("To begin with, we're going to install docker just like we would for any other OS by following Docker's\n"),t("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/debian/#install-docker-ce",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation for Debian"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Once you've done that, if you run "),t("code",[e._v("docker info")]),e._v(" you'll notice some missing features at the bottom, something\nlike the output below.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("WARNING: No memory limit support\nWARNING: No swap limit support\nWARNING: No kernel memory limit support\nWARNING: No oom kill disable support\nWARNING: No cpu cfs quota support\nWARNING: No cpu cfs period support\n")])])]),t("h2",{attrs:{id:"update-grub-startup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-grub-startup"}},[e._v("#")]),e._v(" Update GRUB Startup")]),e._v(" "),t("p",[e._v("To fix the memory limit support issues, we just need to add two arguments to our default grub startup. Start by\nopening "),t("code",[e._v("/etc/default/grub")]),e._v(" and adding the following arguments to "),t("code",[e._v("GRUB_CMDLINE_LINUX_DEFAULT")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("swapaccount=1 cgroup_enable=memory\n")])])]),t("p",[e._v("The line should then look like the one below — assuming nothing else was in the quote to begin with.")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1 cgroup_enable=memory"\n')])])]),t("p",[e._v("After doing that, run "),t("code",[e._v("sudo update-grub")]),e._v(" to update our grub configuration.")]),e._v(" "),t("h2",{attrs:{id:"add-backports-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-backports-repo"}},[e._v("#")]),e._v(" Add Backports Repo")]),e._v(" "),t("p",[e._v("We then need to enable the "),t("code",[e._v("jessie-backports")]),e._v(" apt repository to install a newer kernel. To do this, run the commands below.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" deb http://http.debian.net/debian jessie-backports main "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/apt/sources.list.d/jessie-backports.list\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" deb http://http.debian.net/debian jessie-backports main contrib non-free "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /etc/apt/sources.list.d/jessie-backports.list\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n")])])]),t("p",[e._v("To find the most recent kernels, run "),t("code",[e._v("apt-cache search linux-image")]),e._v(" which will list all of the ones available. In this\ncase, we'll install the "),t("code",[e._v("4.9.0")]),e._v(" kernel using the command below. Once we've done that, it is time to reboot the server\nto start using this kernel.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-t")]),e._v(" jessie-backports linux-image-4.9.0-0.bpo.3-amd64\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v("\n")])])]),t("h2",{attrs:{id:"update-software-setup-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-software-setup-docker"}},[e._v("#")]),e._v(" Update Software & Setup Docker")]),e._v(" "),t("p",[e._v("Now that we're on the new kernel you probably need to update some software to take advantage of it. To do this,\nsimply run the command below.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" upgrade\n")])])]),t("p",[e._v("Once that is done, we need to make an adjustment to docker to use "),t("code",[e._v("overlay2")]),e._v(" rather than "),t("code",[e._v("aufs")]),e._v(" since "),t("code",[e._v("aufs")]),e._v(" is not\nsupported on this kernel currently. Run the command below to do so.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-i")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s,/usr/bin/dockerd,/usr/bin/dockerd --storage-driver=overlay2,g'")]),e._v(" /lib/systemd/system/docker.service\n")])])]),t("p",[e._v("Finally, update "),t("code",[e._v("systemd")]),e._v(" and start docker using the following commands.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("systemctl daemon-reload\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" start\n")])])]),t("p",[e._v("Docker should now be running and reporting no errors if you run "),t("code",[e._v("docker info")]),e._v("!")])])}),[],!1,null,null,null);t.default=o.exports}}]);