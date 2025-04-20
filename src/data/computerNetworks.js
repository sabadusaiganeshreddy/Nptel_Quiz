const questionsData ={
    "2025": {
      "1": [
        {
          id: "25-1-1",
          question: "How many collision domains are in a 10-port hub, an 8-port switch (L2), and a 4-port router, respectively? A collision domain is the segment of a network, where if more than one device tries to send data simultaneously, it causes a collision and the data is lost.",
          options: [
            "1, 8, and 4, respectively.",
            "10, 8, and 4, respectively.",
            "10, 10, and 10, respectively.",
            "5, 4, and 2, respectively."
          ],
          answer: 0,
          solution: "Router has per-port broadcast and collision domain. Switch has a per-port collision domain with a single broadcast domain. Hub has a single collision and broadcast domain."
        },
        {
          id: "25-1-2",
          question: "Map the devices with their associated layer in the TCP/IP model.\nA. NIC\nB. Router\nC. Bridge\nD. Hub",
          options: [
            "A-2, B-3, C-2, and D-1",
            "A-3, B-3, C-2, and D-1",
            "A-3, B-3, C-1, and D-2",
            "A-2, B-3, C-2, and D-2"
          ],
          answer: 0,
          solution: "Hub operates at Layer 1 of the TCP/IP model, while Bridge, NIC, and Switch(L2) work with MAC addresses at Layer 2. A Router works with IP addresses and it operates in a network layer."
        },
        {
          id: "25-1-3",
          question: "Map the protocols with their associated layer in TCP/IP.\nA. FTP\nB. UDP\nC. PPP\nD. IP\nE. HTTP",
          options: [
            "A-1, B-2, C-3, D-4, and E-5",
            "A-5, B-4, C-3, D-2, and E-1",
            "A-5, B-2, C-2, D-3, and E-5",
            "A-5, B-4, C-2, D-3, and E-5"
          ],
          answer: 3,
          solution: "File Transfer Protocol (FTP), and HyperText Transfer Protocol (HTTP) operate in an application layer; User Datagram Protocol (UDP) operates in a transport layer; Internet Protocol (IP) operates in a network layer; and Point to Point Protocol (PPP) operates in a data link layer."
        },
        {
          id: "25-1-4",
          question: "Which of the following statement(s) are concerned with encapsulation in computer networks?\nI. It involves an addition of a header and trailer to the actual data as it moves down in the TCP/IP protocol stack.\nII. At the transport layer, encapsulation includes port numbers and at the network layer, encapsulation includes IP addresses.",
          options: [
            "Only (I)",
            "Only (II)",
            "Both (I) and (II)",
            "Neither (I) nor (II)"
          ],
          answer: 2,
          solution: "Encapsulation is the process of addition of a header and trailer while moving down from upper layer to lower layer like adding source and destination port numbers to the application layer data, adding source and destination IP addresses to the transport layer segment etc."
        },
        {
          id: "25-1-5",
          question: "Which of the following is NOT a disadvantage of the circuit switching technique over the packet switching technique in computer networks?",
          options: [
            "Delay in the establishment of a dedicated connection between two hosts",
            "Inefficient utilization of the resources",
            "Less scalable",
            "Provides a dedicated communication path between two end hosts"
          ],
          answer: 3,
          solution: "Circuit switching techniques establish a dedicated path for communication, and it remains unutilised in case of no data transmission. It also suffers from greater setup time delay, scalability issues, lack of fault tolerance, etc."
        },
        {
          id: "25-1-6",
          question: "Choose the FALSE statement.",
          options: [
            "Bridges filter network traffic based on IP addresses.",
            "Hubs share bandwidth among all attached devices.",
            "Switch provides dedicated bandwidth for each LAN segment."
          ],
          answer: 0,
          solution: "Bridges filter network traffic based on MAC addresses."
        },
        {
          id: "25-1-7",
          question: "Which transport layer protocol will be chosen by an application that does not require any reliability?",
          options: [
            "TCP",
            "UDP"
          ],
          answer: 1,
          solution: "User Datagram Protocol (UDP) is a connectionless-oriented protocol and provides no reliability."
        },
        {
          id: "25-1-8",
          question: "You are a network administrator in your college. You are asked to do troubleshooting for an issue of a remote server using telnet. Which of the following consideration(s) should you keep in mind when using Telnet for this task?",
          options: [
            "Telnet is more secure than SSH while making a remote connection.",
            "It is advisable to use telnet in a local network rather than on the internet to avoid security risks.",
            "Telnet encrypts all traffic by itself during communication.",
            "Telnet transmits data as a plaintext including login credentials."
          ],
          answer: [1, 3],
          solution: "Telnet is an insecure method to connect to a remote server. Its traffic is flowing in the networks as a plaintext including login credentials. For the security aspect, we adopt SSH instead of telnet."
        },
        {
          id: "25-1-9",
          question: "Choose the statement(s) that correctly describe(s) the roles and responsibilities of the Network Interface Card (NIC) in the computer networks.\nI. NIC takes over the responsibility of segmenting large chunks of data into smaller packets that can be transmitted over the networks.\nII. It converts digital data from the computer's processor to an analog signal.",
          options: [
            "Only (I)",
            "Only (II)",
            "Both (I) and (II)",
            "Neither (I) nor (II)"
          ],
          answer: 2,
          solution: "The NIC's primary role at the Data Link Layer is to ensure reliable frame-based transmission of data over a local network, including responsibilities for framing, MAC addressing, error detection, flow control, and managing access to the transmission medium. In computer networking, large send offload (LSO) is a technique for increasing egress throughput of high-bandwidth network connections by reducing CPU overhead."
        },
        {
          id: "25-1-10",
          question: "Identify the INCORRECT statement(s) related to Bridge and Switch (L2) in computer networks.",
          options: [
            "For small enterprises (without the need for features like QoS, VLANs, and STP), a switch is more economical/suitable in the case of segmenting the traffic between two LANs than a bridge.",
            "Switches operate in full-duplex mode while bridges in half-duplex mode.",
            "Switches broadcast traffic to all ports, while bridges broadcast the traffic to designated ports (ports having the same VLAN port as the sender) by using a MAC address table.",
            "Switches and bridges are both equally important in modern, large, and complex networks."
          ],
          answer: [0, 2, 3],
          solution: "Bridge and Switch (L2) Both are layer 2 devices. Bridges are replaced by multiport switches in large and complex networks. Bridges operate in only two ports and permit traffic in only one direction at a time. Switches have multiports and permit the traffic in full-duplex mode."
        }
      ],
      "2": [
        {
          id: "25-2-1",
          question: "What is the difference between a 'domain' and 'zone' in DNS?",
          options: [
            "Zone is a subset of a domain, and a domain can contain multiple zones.",
            "Domain is a subset of a zone, and a zone can contain multiple domains.",
            "Domain is a logical hierarchy, whereas a zone is a physical DNS server.",
            "DNS zones must be physically separated from each other."
          ],
          answer: 0,
          solution: "A zone refers to a specific portion of this domain that is managed by a particular administrative entity or DNS server. DNS zones aren't necessarily physically separated from each other."
        },
        {
          id: "25-2-2",
          question: "What makes FTP more secure than TFTP (Trivial File Transfer Protocol)?",
          options: [
            "TFTP lacks features like user authentication and secure data transfer mechanisms.",
            "TFTP allows simultaneous connections without encryption.",
            "TFTP uses TCP, which is inherently less secure than UDP.",
            "TFTP is designed for unreliable networks, making it inherently less secure."
          ],
          answer: 0,
          solution: "Compared to FTP, which uses TCP and has authentication mechanisms, TFTP is less dependable and safe since it lacks crucial security features like user authentication and runs on UDP."
        },
        {
          id: "25-2-3",
          question: "In the HTTP architecture, which of the following best describes a Uniform Resource Locator (URL)?",
          options: [
            "A secure protocol for encrypting HTTP communication.",
            "A client-side scripting language for web development.",
            "A unique identifier for resources, including the protocol, hostname, and path",
            "A header that allows caching of web pages for better performance."
          ],
          answer: 2,
          solution: "A URL uniquely identifies resources on the web, specifying the protocol (e.g., HTTP or HTTPS), hostname (e.g., example.com), port (if applicable), and the path to the resource."
        },
        {
          id: "25-2-4",
          question: "Which of the following statements about HTTP proxy servers is NOT true?",
          options: [
            "They can cache responses from web servers to improve performance.",
            "They can filter requests based on predefined rules.",
            "They only work with secure connections (HTTPS).",
            "They act as intermediaries between clients and web servers."
          ],
          answer: 2,
          solution: "HTTP proxy servers are not limited to secure connections; they can process both HTTP and HTTPS queries. Because they have the ability to filter requests and cache responses, option C is erroneous."
        },
        {
          id: "25-2-5",
          question: "Which of the following is correct for statements P, Q and R?\nP: HTTP uses TCP port 80 for communication.\nQ: TELNET transmits data in an encrypted format.\nR: DNS can operate on both TCP and UDP.",
          options: [
            "Both P and R is False, Only Q is True",
            "Both P and R is True, Q is False",
            "Only Q is True",
            "Only R is False"
          ],
          answer: 1,
          solution: "P: True. HTTP uses TCP port 80 for communication.\nQ: False. TELNET transmits data in plaintext, making it unencrypted and insecure.\nR: True. DNS typically runs on UDP for queries but switches to TCP for zone transfers or large responses."
        },
        {
          id: "25-2-6",
          question: "What is the correct syntax to be written in the command line to initiate a Telnet connection to the web server of www.iitkgp.ac.in?",
          options: [
            "telnet//www.iitkgp.ac.in",
            "telnet:www.iitkgp.ac.in",
            "telnet://www.iitkgp.ac.in",
            "telnet www.iitkgp.ac.in"
          ],
          answer: 3,
          solution: "The command starts with Telnet, followed by the hostname or IP address."
        },
        {
          id: "25-2-7",
          question: "Which of the following protocols allow non-ASCII data to be sent over email?",
          options: [
            "IMAP4",
            "TELNET",
            "MIME",
            "POP3"
          ],
          answer: 2,
          solution: "MIME transforms data into a format that SMTP can transmit, such as Base64 encoding for binary files, allowing non-ASCII data to be sent over email."
        },
        {
          id: "25-2-8",
          question: "Which of the following is true about the mail transfer protocol?\nS1: Can send image files with the help of IMAP4\nS2: Can send image files with the help of POP3\nS3: IMAP4 is more secure than POP3",
          options: [
            "Only S1",
            "Only S2",
            "S2 and S3 only",
            "S3 Only"
          ],
          answer: 3,
          solution: "S1: Incorrect. SMTP cannot send image files directly; it requires MIME (not IMAP4) for sending non-ASCII data like images.\nS2: Incorrect. POP3 is used for retrieving emails, not for sending them. SMTP sends emails, but image files are sent via MIME.\nS3: Correct. IMAP4 is generally more secure than POP3 because it supports features like encrypted communication and better mailbox management."
        },
        {
          id: "25-2-9",
          question: "A user is accessing a webpage hosted on a remote server. The webpage contains multiple elements, such as text content, several images, and a JavaScript file. The user's browser starts by initiating a connection to the server and sending requests to fetch the necessary resources. Assume the following steps:\n- The browser must first resolve the web server's domain name to an IP address.\n- After the server IP is obtained, the browser opens a TCP connection to request the webpage and its embedded resources.\n- The packets leaving the user's machine, in some order, are as follows:\n(i) HTTP GET request for the main HTML page\n(ii) DNS query to resolve the web server's domain name\n(iii) TCP SYN to establish a connection with the server\n(iv) HTTP GET request for a JavaScript file\n(v) HTTP GET request for an image file\nWhich of the following is the correct chronological order in which the packets leave the user's computer (from first to last)?",
          options: [
            "(ii), (iii), (i), (v), (iv)",
            "(iii), (ii), (i), (v), (iv)",
            "(ii), (iv), (i), (iii), (v)",
            "(ii), (i), (iii), (v), (iv)"
          ],
          answer: 0,
          solution: "1. DNS Query: The browser must resolve the web server's domain name into an IP address. This is the first step, so (ii) comes first.\n2. TCP Connection Setup: After the IP address is obtained, the browser must establish a TCP connection with the server. This involves the TCP handshake, so (iii) is the second step.\n3. HTTP GET Request for Main Page: After the connection is established, the browser sends an HTTP GET request for the main HTML page, which is (i).\n4. HTTP GET Requests for Embedded Resources: After receiving the main page, the browser requests the embedded resources (image and JavaScript files). These requests are typically sent after receiving the HTML page, so (v) (image) and (iv) (JavaScript) can be executed in any order."
        },
        {
          id: "25-2-10",
          question: "Consider the following statements:\nS1: A user requests a web page that consists of some text and one image. For this page the client will send one request message and receive 4 response messages.\nS2: It is not possible to send two different web pages (for example, www.nptel.ac.in/student.html and www.nptel.ac.in/course.html) over the same persistent connection.\nWhich one of the above statements are true?",
          options: [
            "Only S1 is true",
            "Only S2 is false",
            "Both S1 and S2 are true",
            "Both S1 and S2 are false"
          ],
          answer: 3,
          solution: "S1: It will send 4 message, and receive 4 response messages\nS2: If the connection does not timeout and we do not close it, persistent HTTP keeps the connection open. so that more web pages can be sent over persistent HTTP connections."
        }
      ],
      "3": [
        {
          id: "25-3-1",
          question: "What kind of sequence number does TCP use?",
          options: [
            "byte-oriented sequence number",
            "packet-oriented sequence number",
            "Randomly generated fixed sequence numbers",
            "none of them"
          ],
          answer: 0,
          solution: "TCP uses byte-oriented sequence numbering to ensure reliable, ordered, and efficient data transmission over a network."
        },
        {
          id: "25-3-2",
          question: "Identify the FALSE statement(s) in the following-\nI. The transport layer functionalities (e.g., connection establishment, flow control, error detection) operate at an abstract level using data structures, algorithms, and system calls implemented in the OS kernel.\nII. The operating system (OS) kernel does not play any role in supporting the transport layer functionalities of the TCP/IP protocol stack.",
          options: [
            "Only (I)",
            "Only (II)",
            "Both (I) and (II)",
            "Neither (I) nor (II)"
          ],
          answer: 1,
          solution: "The transport layer relies on data structures (e.g., buffers, sequence number tables) to manage connections, algorithms (e.g., sliding window for flow control, checksum for error detection) to ensure reliable communication, and system calls (e.g., socket(), send(), recv()) to interact with the OS kernel, which implements these functionalities abstractly for application-level use."
        },
        {
          id: "25-3-3",
          question: "Which of the following services is NOT supported by the transport layer?",
          options: [
            "End-to-end packet delivery",
            "Ordered packet delivery",
            "Reliable data delivery",
            "Forwarding the datagram from one hop to another hop in the network"
          ],
          answer: 3,
          solution: "The transport layer provides services like End-to-end packet delivery, Ordered packet delivery, Reliable data delivery, Connection establishment, and Flow & Congestion control etc. The hop-tohop network packet forwarding is supported by data link layer and network layer."
        },
        {
          id: "25-3-4",
          question: "What can be a primary mechanism used to ensure the reliable data transfer in a stop-and-wait algorithm (Noisy Channel)?",
          options: [
            "Employing only error detection and correction codes without requiring acknowledgements.",
            "Increasing the timeout interval.",
            "Using a sequence number to identify each packet uniquely and waiting for an acknowledgement for each packet before sending the next packet.",
            "Using a sliding window to send multiple packets without waiting for their acknowledgements."
          ],
          answer: 2,
          solution: "Stop-and-Wait (Noisy Channel) flow control algorithm uses a sequence number to individually identify each frame and corresponding acknowledgement. It ensures reliability by attaching a sequence number to each packet and transmits a packet & waits for an acknowledgment (ACK) from the receiver before sending the next packet."
        },
        {
          id: "25-3-5",
          question: "A data of 40 bytes need to be delivered using TCP protocol but a sender can send a segment of maximum size 12 bytes only. Identify the sequence number of the last segment formed if the sequence number field uses 5 bits only? [Assume sequence number starts from 0]",
          options: [
            "1",
            "4",
            "12",
            "31"
          ],
          answer: 1,
          solution: "TCP uses byte sequencing. It treats data as a continuous stream of bytes rather than discrete packets. Since the sequence number field uses 5 bits only, it produces sequence numbers ranging from 0 to 31.\nThe first segment of 12 bytes will use the sequence number range (0-11),\nNext segment of 12 bytes will use the sequence number range (12-23),\nNext segment of 12 bytes will use the sequence number range (24-31) & (0-3), and\nThe last segment of 4 bytes will use the sequence number range (4-7)."
        },
        {
          id: "25-3-6",
          question: "A sender uses a sliding window protocol with a window size of 5. The range of sequence numbers follows modulo 8 (the sequence number starts from 0 to 7). If the receiver acknowledges packet 1, what will be the sender's new window range?",
          options: [
            "1-5",
            "2-6",
            "3-7",
            "0-4"
          ],
          answer: 1,
          solution: "When the receiver acknowledges the packet, resulting in a forward slide of the sender's window. The sliding window now starts at 2 (the next unacknowledged sequence number) till the allowed window size."
        },
        {
          id: "25-3-7",
          question: "Determine whether the following information is True or False?\n\"During the three-way handshaking of connection establishment procedure (from Host 1 to Host 2), Delayed duplicate SYN can be handled by TCP at Host 2 simply by ignoring it, as the sequence number is invalid\"",
          options: [
            "True",
            "False"
          ],
          answer: 0,
          solution: "The TCP 3-Way Handshake is a fundamental process that establishes a reliable connection between two devices over a TCP/IP network. During the handshake, the client and server exchange initial sequence numbers. It uses sequence numbers to identify and validate the legitimacy of connection requests."
        },
        {
          id: "25-3-8",
          question: "TCP instance uses a sliding window protocol in the noisy channel. A timeout occurs due to the loss of a segment (or the acknowledgement). Mark the RIGHT statement among the following-",
          options: [
            "In the case of Go-Back-N ARQ, if any segment of the sliding window is lost, all the segments of the sliding window are retransmitted while in Selective Repeat ARQ, only the lost packets are selectively transmitted.",
            "In the case of Go-Back-N ARQ, if any segment of the sliding window is lost, only the lost packets of the sliding window are selectively retransmitted while in Selective Repeat ARQ, all packets of the sliding window are retransmitted.",
            "In both cases, Go-Back-N ARQ and Selective Repeat ARQ, all packets of the sliding window are retransmitted.",
            "In the both cases, Go-Back-N ARQ and Selective Repeat ARQ, only lost packets of the sliding window are selectively retransmitted."
          ],
          answer: 0,
          solution: "In the case of Go-Back-N ARQ, if any segment of the sliding window is lost, all the segments of the corresponding sliding window are retransmitted while in Selective Repeat ARQ, only the lost packets are selectively transmitted."
        },
        {
          id: "25-3-9",
          question: "Consider a sender using the Go-Back-N ARQ protocol with a window size 5. The sequence number ranges from 0 to 7 (modulo 8). The sender initially transmits packets with the sequence numbers- 0, 1, 2, 3, and 4. During the transmission, packet 3 is lost in the network. The sender receives a cumulative ACK for the packet 2. The sender continues sending packet 5, 6, and 7 but the receiver denies accepting them due to the loss of packet 3. Identify the range of packets that will be retransmitted by the sender after the timeout of packet 3?",
          options: [
            "0, 1, 2, 3, and 4.",
            "2, 3, 4, 5, and 6.",
            "3, 4, 5, 6, and 7.",
            "1, 2, 3, 4, and 5."
          ],
          answer: 2,
          solution: "In Go-Back-N ARQ, when a timeout occurs, the sender retransmits all packets starting from the lost packet to all permissible packets in accordance with the window size."
        },
        {
          id: "25-3-10",
          question: "A client and a server establish a connection using TCP's three-way handshake. The following details are given:\n- Initial sequence number of the client: 100 and initial sequence number of the server: 300.\n- RTT (Round Trip Time): 80 ms.\n- Each TCP segment carries 40 bytes of header information.\n- The server sends a SYN-ACK segment, and the acknowledgement (ACK) segment from the client is delayed due to congestion, taking 100 ms to reach the server.\nHow much time does it take to establish the connection under such a scenario?",
          options: [
            "100 ms",
            "280 ms",
            "180 ms",
            "260 ms"
          ],
          answer: 2,
          solution: "In three way handshaking, the connection is established after three steps. In first step, sender sends a connection request SYN packet to the server. Server responds to client with SYN+ACK packet. Finally, sender sends a ACK packet to the server. Since RTT = 80 ms so for one way packet transmission will take 40 ms. Since, there is a delay during transmission of ACK packet from sender to server due to congestion and it takes greater time i.e. 100 ms. So, the total time needed to complete this connection procedure will be (time taken for SYN packet + time taken for SYN+ACK packet + time taken for ACK packet) i.e. (80/2 ms + 80/2 ms + 100 ms = 180 ms)."
        }
      ],
      "4": [
        {
          id: "25-4-1",
          question: "Which statement about choosing a transport protocol based on BDP (Bandwidth Delay Product) is correct?",
          options: [
            "Sliding window protocols always outperform stop-and-wait protocols, regardless of the BDP.",
            "When the BDP is smaller than the segment size, a sliding window protocol significantly improves performance.",
            "Stop-and-wait protocols are preferred when the BDP is smaller than the segment size to minimize complexity.",
            "Selective repeat ARQ should always be chosen over go-back-N ARQ to maximize throughput."
          ],
          answer: 2,
          solution: "The simplicity of stop-and-wait protocols comes from avoiding the complexity of managing multiple packets in transit, retransmissions, and acknowledgments simultaneously. In cases where the BDP is smaller than the segment size, the channel cannot effectively utilize the benefits of a sliding window protocol, making stop-and-wait a better choice for reducing complexity without sacrificing performance."
        },
        {
          id: "25-4-2",
          question: "Which of the following best describes Max-Min Fairness in congestion control?",
          options: [
            "Allocating bandwidth equally to all flows regardless of their requirements.",
            "Allocating bandwidth based on the relative priority of each flow, does not ensure optimal network efficiency.",
            "Maximizing the minimum bandwidth across all links in the network.",
            "Allocating bandwidth so that no flow can increase its allocation without decreasing another flow's allocation."
          ],
          answer: 3,
          solution: "Max-Min Fairness ensures that bandwidth is allocated in such a way that increasing the allocation for one flow can only occur by decreasing the allocation for another flow. This principle prioritizes fairness while respecting the constraints of the network, particularly at bottleneck links, ensuring that no flow is unfairly starved."
        },
        {
          id: "25-4-3",
          question: "What happens if a transport-layer application Transmission Control Protocol (TCP) attempts to send data before the connection is established?",
          options: [
            "The data is queued until the connection is established.",
            "The operation is invalid, and the transport layer prevents it.",
            "The data is sent, but the receiver might ignore it.",
            "The data is fragmented and sent in packets to the destination."
          ],
          answer: 1,
          solution: "In a stateful transport-layer protocol like TCP, data transmission is only allowed when the connection is in the 'established' state. If an application attempts to send data before the connection is established, the operation is invalid, and the transport layer will block or reject it."
        },
        {
          id: "25-4-4",
          question: "Which of the following conditions does not influence the segment size in TCP?",
          options: [
            "Maximum Transmission Unit (MTU) of the underlying link.",
            "Receiver's advertised window size.",
            "Network congestion window size.",
            "Header length of the IP protocol."
          ],
          answer: 3,
          solution: "Header Length of the IP Protocol does not directly affect the TCP segment size. Instead, it impacts the total size of the network packet but is unrelated to the TCP segmentation process."
        },
        {
          id: "25-4-5",
          question: "In the TCP connection release process, why does the active closer enter the TIME-WAIT state after receiving the final acknowledgment?",
          options: [
            "To confirm that the other host has received the FIN message.",
            "To allow the passive closer to resend data if needed.",
            "To ensure that any delayed packets in the network are discarded.",
            "To avoid reusing the same port for a new connection."
          ],
          answer: 2,
          solution: "The TIME-WAIT state ensures that all delayed packets in the network from the just-closed connection are discarded. This prevents any potential interference with subsequent connections that might reuse the same port and sequence numbers."
        },
        {
          id: "25-4-6",
          question: "In a distributed system, a server advertises a receiver window of 0 due to lack of buffer space. However, the application frees up space but the updated acknowledgment is lost. What should the client do to prevent deadlock?",
          options: [
            "Wait indefinitely until the server sends a new acknowledgment.",
            "Resend data packets at periodic intervals to elicit a response.",
            "Use a keep-alive mechanism to periodically check the buffer status.",
            "Close the connection and restart communication."
          ],
          answer: 2,
          solution: "A keep-alive mechanism allows the client to periodically probe the server for updated buffer availability without retransmitting data, preventing deadlock."
        },
        {
          id: "25-4-7",
          question: "A TCP sender observes a mismatch between the advertised window size from the receiver and the available buffer space. Which of the following is True?",
          options: [
            "The receiver has miscalculated the advertised window size.",
            "Congestion control mechanisms have reduced the sender's transmission rate.",
            "The sender's maximum segment size (MSS) is incorrectly set.",
            "A delayed acknowledgment has caused the advertised window size to be outdated."
          ],
          answer: 3,
          solution: "If acknowledgments are delayed, the receiver's advertised window size may not reflect the current buffer availability, leading to a perceived mismatch."
        },
        {
          id: "25-4-8",
          question: "A transport-layer protocol using AIMD starts with an initial sending rate of 1 Mbps. After four successful additive increases (each adding 0.5 Mbps), it detects packet loss. If the multiplicative decrease factor is 0.5, what will be the new sending rate?",
          options: [
            "2.5 Mbps",
            "1 Mbps",
            "3 Mbps",
            "1.5 Mbps"
          ],
          answer: 3,
          solution: "Initial rate: 1 Mbps.\nFour additive increases: 1 + 4 × 0.5 = 3 Mbps\nMultiplicative decrease: 3 × 0.5 = 1.5 Mbps"
        },
        {
          id: "25-4-9",
          question: "A TCP connection is experiencing high delays and packet reordering. Which features of TCP help maintain reliable and ordered communication in this scenario?\n(i) Sequence numbers in the TCP header.\n(ii) Acknowledgment numbers indicating the next expected byte.\n(iii) The urgent pointer to prioritize packets.\n(iv) Sliding window flow control.",
          options: [
            "(i), (iii), (iv)",
            "(i), (ii), (iii)",
            "(ii), (iii), (iv)",
            "(i), (ii), (iv)"
          ],
          answer: 3,
          solution: "A and B: Sequence and acknowledgment numbers allow TCP to reorder out-of-order packets and ensure reliable delivery.\nD: Sliding window flow control ensures efficient data transfer despite delays.\nC: The urgent pointer is unrelated to packet reordering or delays"
        },
        {
          id: "25-4-10",
          question: "In the case of a simultaneous TCP open (both hosts initiate a connection at the same time), which of the following are true?\n(i): Both hosts will transition to the SYN-RECEIVED state after exchanging SYN messages.\n(ii): The three-way handshake completes with the exchange of SYN+ACK messages.\n(iii): Both hosts will immediately move to the ESTABLISHED state after receiving SYN messages.\n(iv): Simultaneous open is less secure due to lack of proper sequence number synchronization.",
          options: [
            "(i) and (ii)",
            "(iii) and (iv)",
            "All are True",
            "All are False"
          ],
          answer: 0,
          solution: "In a simultaneous open, both hosts send SYN packets and transition to the SYN-RECEIVED state. The handshake proceeds as normal, ensuring proper synchronization of sequence numbers. Security is not compromised (D) because sequence numbers are negotiated during the handshake."
        }
      ],
      "5": [
        {
          id: "25-5-1",
          question: "How does the TCP Sliding Window mechanism contribute to efficient data transmission?",
          options: [
            "By retransmitting all data upon detecting a single packet loss",
            "By dynamically adjusting the size of the transmission window",
            "By sending data in fixed-size packets regardless of network conditions",
            "By prioritizing specific data packets for faster delivery"
          ],
          answer: 1,
          solution: "The TCP Sliding Window mechanism ensures efficient data transmission by dynamically adjusting the size of the transmission window based on the receiver's buffer capacity and network conditions."
        },
        {
          id: "25-5-2",
          question: "What is a potential drawback of Nagle's algorithm?",
          options: [
            "Increased error rate",
            "Increased latency for small packets",
            "Reduced bandwidth utilization",
            "Inefficient congestion control"
          ],
          answer: 1,
          solution: "Nagle's algorithm can introduce additional latency for small packets, as it waits for either an acknowledgment of the last packet or enough data to fill the MSS before sending."
        },
        {
          id: "25-5-3",
          question: "Which mechanism is used to avoid Silly Window Syndrome at the receiver side?",
          options: [
            "Delayed acknowledgment",
            "Nagle's algorithm",
            "Clark's solution",
            "Fast retransmit"
          ],
          answer: 2,
          solution: "Clark's solution is used to avoid SWS at the receiver's side. It prevents the receiver from advertising a small window size until the buffer can hold a significant amount of data."
        },
        {
          id: "25-5-4",
          question: "What impact does a higher α value have on Jacobson's algorithm?",
          options: [
            "It makes SRTT more sensitive to sudden RTT changes.",
            "It reduces the impact of new RTT measurements on SRTT.",
            "It increases the weight of RTTVAR in RTO calculation.",
            "It eliminates the need for RTTVAR."
          ],
          answer: 1,
          solution: "In Jacobson's algorithm, α controls the smoothing of SRTT. A higher α places more emphasis on historical RTT values, reducing the influence of new RTT measurements."
        },
        {
          id: "25-5-5",
          question: "When does TCP enter the Congestion Avoidance phase?",
          options: [
            "When ssthresh (slow start threshold) is reached",
            "After three duplicate acknowledgments",
            "When the receiver's buffer is full",
            "After the congestion window is halved"
          ],
          answer: 0,
          solution: "TCP transitions from Slow Start to Congestion Avoidance once the congestion window size exceeds the ssthresh."
        },
        {
          id: "25-5-6",
          question: "If the Checksum field in the UDP header is set to 0, what does it indicate?",
          options: [
            "The checksum is not computed.",
            "The checksum failed.",
            "The checksum is valid.",
            "The checksum is reserved for future use."
          ],
          answer: 0,
          solution: "A checksum value of 0 in UDP indicates that the sender did not compute the checksum. This is allowed only in IPv4, but in IPv6, the checksum is mandatory."
        },
        {
          id: "25-5-7",
          question: "What is the purpose of the pseudo-header used in the UDP checksum calculation?",
          options: [
            "To verify data integrity across multiple networks",
            "To include additional information like source and destination IPs",
            "To ensure compatibility with TCP",
            "To pad the UDP datagram to a fixed size"
          ],
          answer: 1,
          solution: "The pseudo-header includes the source IP, destination IP, protocol, and UDP length. It is used in the checksum calculation to verify data integrity."
        },
        {
          id: "25-5-8",
          question: "What does the listen() function do in socket programming?",
          options: [
            "It binds a socket to an address.",
            "It puts the socket into a passive mode to wait for incoming connections.",
            "It actively connects to a server socket.",
            "It sends data over the socket."
          ],
          answer: 1,
          solution: "The listen() function sets up a socket to accept incoming connections by placing it in a passive listening mode."
        },
        {
          id: "25-5-9",
          question: "Which function can be used to configure socket options like timeout or buffer size?",
          options: [
            "setsockopt()",
            "sockopt()",
            "configure()",
            "options()"
          ],
          answer: 0,
          solution: "The setsockopt() function is used to configure various socket options, such as timeout values, buffer sizes, and other protocol-specific settings."
        },
        {
          id: "25-5-10",
          question: "What is the advantage of an iterative server over a concurrent server?",
          options: [
            "It is faster in handling multiple requests.",
            "It is easier to implement and debug.",
            "It supports asynchronous I/O.",
            "It has lower response times for high-traffic scenarios."
          ],
          answer: 1,
          solution: "An iterative server is simpler to implement and debug due to its sequential nature, making it easier to manage compared to concurrent server models."
        }
      ],
      "6": [
        {
          id: "25-6-1",
          question: "What is the primary function of the network layer in the TCP/IP model?",
          options: [
            "Establish end-to-end connections between nodes.",
            "Ensure reliable data transfer between devices.",
            "Handle logical addressing and routing of data.",
            "Encrypt and decrypt data for secure transmission."
          ],
          answer: 2,
          solution: "The network layer is responsible for logical addressing (e.g., IP addresses) and routing data packets across networks."
        },
        {
          id: "25-6-2",
          question: "Which of the following is a key advantage of using a Layer 3 switch over a Layer 2 switch?",
          options: [
            "It reduces the need for VLANs.",
            "It improves network performance by enabling faster switching at Layer 1.",
            "It can route traffic between different subnets without requiring a separate router.",
            "It only supports static routing."
          ],
          answer: 2,
          solution: "A Layer 3 switch combines the functionality of a switch and a router, allowing it to perform routing between different subnets."
        },
        {
          id: "25-6-3",
          question: "Which of the following is NOT typically offered by an ISP?",
          options: [
            "Email hosting services.",
            "Web hosting services.",
            "Content creation for websites.",
            "Virtual Private Network (VPN) services."
          ],
          answer: 2,
          solution: "ISPs do not create content. They provide infrastructure and services like email hosting, web hosting, and VPNs."
        },
        {
          id: "25-6-4",
          question: "In a network communication scenario involving an Internet Service Provider (ISP), which of the following is responsible for determining the most efficient path for packet delivery?",
          options: [
            "Transport Layer",
            "Network Layer",
            "Data Link Layer",
            "Application Layer"
          ],
          answer: 1,
          solution: "The network layer, using routing protocols and IP, determines the best path for packet delivery."
        },
        {
          id: "25-6-5",
          question: "When communicating between two nodes, what role does the transport layer protocol play?",
          options: [
            "Routing the data packets.",
            "Providing IP logical addressing to the communicating devices.",
            "Ensuring reliable or fast data delivery based on protocol choice.",
            "Forwarding the data to the next hop through LAN."
          ],
          answer: 2,
          solution: "Transport layer protocols like TCP ensure reliable delivery, while UDP provides faster but less reliable delivery."
        },
        {
          id: "25-6-6",
          question: "What type of address is '0.0.0.0' in IPv4?",
          options: [
            "Loopback address",
            "Default route address",
            "Broadcast address",
            "Unspecified address"
          ],
          answer: 3,
          solution: "'0.0.0.0' is used to indicate an unspecified address, often during the bootstrapping process."
        },
        {
          id: "25-6-7",
          question: "What is the significance of CIDR notation in IP addressing?",
          options: [
            "To replace the traditional classful addressing system with a more flexible and efficient way of allocating IP addresses.",
            "To enhance encryption during transmission.",
            "To improve the speed of DNS resolution.",
            "To allocate MAC addresses dynamically."
          ],
          answer: 0,
          solution: "CIDR (Classless Inter-Domain Routing) simplifies and allows for more efficient way of IP address allocation."
        },
        {
          id: "25-6-8",
          question: "How many subnets can be created from a /24 network if the subnet mask is extended to /26?",
          options: [
            "2",
            "4",
            "6",
            "16"
          ],
          answer: 1,
          solution: "Extending the subnet mask to /26 creates 2^(26-24)=4 subnets."
        },
        {
          id: "25-6-9",
          question: "What is the CIDR notation for a supernet that aggregates 192.168.0.0/24 and 192.168.1.0/24?",
          options: [
            "123",
            "124",
            "125",
            "122"
          ],
          answer: 0,
          solution: "The supernet 192.168.0.0/23 includes both 192.168.0.0/24 and 192.168.1.0/24."
        },
        {
          id: "25-6-10",
          question: "In a home network using NAT, how does a router differentiate between multiple devices accessing the same web server?",
          options: [
            "By assigning unique public IP addresses to each device.",
            "By using different MAC addresses for each device.",
            "By assigning unique port numbers for each session.",
            "By encrypting the IP packets."
          ],
          answer: 2,
          solution: "The router uses unique port numbers for each session in NAT to differentiate between devices."
        }
      ],
      "7": [
        {
          id: "25-7-1",
          question: "Which of the following statements about delay components in a network is false?",
          options: [
            "Propagation delay depends on the length of the transmission link.",
            "Queuing delay increases when incoming data exceeds the processing rate of a router.",
            "Transmission delay is influenced by the packet size and the bandwidth of the channel.",
            "Transmission delay is typically greater than queuing delay in congested networks."
          ],
          answer: 3,
          solution: "In congested networks, queuing delay is usually much greater than transmission delay. Queuing delay arises when packets wait in a buffer due to high traffic and limited processing capacity, which is more significant during congestion."
        },
        {
          id: "25-7-2",
          question: "How does traffic shaping differ from traffic policing in the context of QoS?",
          options: [
            "Traffic shaping identifies and marks packets for prioritization, while traffic policing drops packets that violate QoS.",
            "Traffic shaping regulates outgoing traffic rates, while traffic policing monitors and drops packets violating QoS.",
            "Traffic shaping prioritizes real-time traffic, while traffic policing prioritizes non-realtime traffic.",
            "Traffic shaping is applied only at the router, while traffic policing is applied only at the source."
          ],
          answer: 1,
          solution: "Traffic shaping regulates outgoing traffic rates, while traffic policing monitors and drops packets violating QoS."
        },
        {
          id: "25-7-3",
          question: "Which of the following statements about the token bucket algorithm are correct?\nS1: It allows burst traffic by using accumulated tokens.\nS2: It discards excess tokens when the bucket is full.\nS3: It smooths out traffic to a constant rate by dropping excess packets.\nS4: It allows traffic to exceed the token generation rate temporarily if tokens are available.",
          options: [
            "S1 and S3 only",
            "S2 and S4 only",
            "S1, S2 and S4 only",
            "S2, S3 and S4 only"
          ],
          answer: 2,
          solution: "Only S3 is incorrect. The token bucket does not smooth traffic to a constant rate; that is the characteristic of the leaky bucket algorithm. The token bucket allows bursts instead."
        },
        {
          id: "25-7-4",
          question: "A video streaming service uses a token bucket with a token generation rate of 5 Mbps and a bucket size of 10 MB. If the stream has a sudden burst requiring 20 MB of data, how much data can be transmitted immediately without exceeding the allowed rate?",
          options: [
            "10 MB",
            "15 MB",
            "20 MB",
            "5 MB"
          ],
          answer: 0,
          solution: "Since b=10 MB and r×t=5 MB, the request requires 20 MB, but at most, 10 MB is available in the bucket immediately. 10 MB of the 20 MB burst transmitted immediately."
        },
        {
          id: "25-7-5",
          question: "During peak traffic, a network's RED mechanism begins dropping packets when the average queue size reaches the maximum threshold. Why is this early packet drop strategy crucial for maintaining QoS?",
          options: [
            "It reduces packet loss for inelastic traffic by halting elastic traffic completely.",
            "It triggers congestion control in TCP before queue overflow occurs.",
            "It ensures low-priority traffic is always prioritized over high-priority traffic.",
            "It guarantees that all packets from elastic traffic are evenly distributed."
          ],
          answer: 1,
          solution: "When the queue size approaches the maximum threshold, RED starts dropping packets to signal congestion to TCP flows. This early signaling allows TCP to reduce its sending rate before the queue completely overflows."
        },
        {
          id: "25-7-6",
          question: "What is the primary role of a bandwidth broker in the DiffServ architecture?",
          options: [
            "Assign DSCP values to packets dynamically.",
            "Reserve resources in all routers within a domain.",
            "Facilitate inter-domain QoS agreements.",
            "Manage traffic shaping at edge routers."
          ],
          answer: 2,
          solution: "The bandwidth broker manages and communicates QoS policies between DiffServ domains, enabling end-to-end QoS through bilateral agreements."
        },
        {
          id: "25-7-7",
          question: "A company deploys IntServ for a critical application requiring guaranteed QoS. However, some flows experience denial of service due to resource unavailability. What mechanism in IntServ likely caused this issue?",
          options: [
            "RSVP Policy Control",
            "Admission Control",
            "Priority Queuing",
            "Traffic Policing"
          ],
          answer: 1,
          solution: "IntServ's Admission Control ensures that new flows are admitted only if sufficient resources are available. If resources are insufficient, the flow is denied access to preserve QoS for existing flows."
        },
        {
          id: "25-7-8",
          question: "A network router using Weighted Fair Queuing (WFQ) schedules packets from three classes with the following weights: 1, 2, and 3. If the total available bandwidth is 600 Mbps, how much bandwidth is allocated to the second class?",
          options: [
            "100 Mbps",
            "200 Mbps",
            "240 Mbps",
            "300 Mbps"
          ],
          answer: 1,
          solution: "The weights sum to 1+2+3=6. The second class (weight 2) gets (2/6) × 600=200 Mbps."
        },
        {
          id: "25-7-9",
          question: "In a DiffServ domain, which of the following are responsibilities of the edge router?\n(i) Packet classification and marking based on DSCP.\n(ii) Queue management for congestion control.\n(iii) Policing to ensure compliance with Service Level Agreements (SLAs).\n(iv) Per-hop behavior (PHB) enforcement for forwarding packets.",
          options: [
            "(i), (iii) only",
            "(i), (ii) only",
            "(ii), (iii) only",
            "(i), (iv) only"
          ],
          answer: 0,
          solution: "Only A and C are correct. Edge routers perform classification, marking, and SLA policing. PHB enforcement occurs at core routers, and queue management is a general function across routers."
        },
        {
          id: "25-7-10",
          question: "Which of the following parameters must be considered for admission control in QoS architectures to determine whether a new flow can be admitted?\n(i) Bandwidth availability on the network\n(ii) Delay tolerance of the existing flows\n(iii) Jitter requirements of the new flow\n(iv) Packet loss rate of the current network traffic",
          options: [
            "(i), (ii) and (iii)",
            "(ii), (iii) and (iv)",
            "All are True",
            "All are False"
          ],
          answer: 2,
          solution: "All these parameters are critical for determining whether admitting a new flow will violate the QoS of existing flows."
        }
      ],
      "8": [
        {
          id: "25-8-1",
          question: "What is the network address of the following?\nIP address: 5.6.7.212\nSubnet Mask: 255.255.252.0",
          options: [
            "5.6.4.0",
            "5.6.7.0",
            "5.6.7.255",
            "5.6.255.255"
          ],
          answer: 0,
          solution: "The network address can be obtained by performing a bitwise AND operation over binary representation of IP address and the subnet mask."
        },
        {
          id: "25-8-2",
          question: "Consider the following CIDR blocks: 192.168.0.0/24 and 192.168.3.0/24. Identify the possible aggregated prefix (route summarization/supernetting) among the following.",
          options: [
            "192.168.0.0/22",
            "192.168.0.0/23",
            "192.168.0.0/24",
            "192.168.0.0/25"
          ],
          answer: 0,
          solution: "Convert the given dotted-decimal format CIDR blocks address into binary dotted representation and find the longest common prefix from left to right."
        },
        {
          id: "25-8-3",
          question: "Which of the following statements are true for Autonomous Systems (AS)?",
          options: [
            "The internet is composed of interconnected Autonomous Systems.",
            "It is administered by multiple authorities.",
            "BGP protocol is primarily used for communication between different Autonomous Systems (ASs).",
            "An Area in an Autonomous System (AS) is a collection of routers, networks, and hosts within an AS."
          ],
          answer: [0, 2, 3],
          solution: "The Autonomous Systems (ASs) is a logical portion of a larger IP network. It is only administered by a single administrator. An Area in an Autonomous System (AS) is a collection of routers, networks, and hosts within an AS."
        },
        {
          id: "25-8-4",
          question: "How many bits are used to identify the Autonomous Systems (AS)?",
          options: [
            "1",
            "32",
            "64",
            "8"
          ],
          answer: 1,
          solution: "Autonomous Systems (AS) primarily use 32-bit numbers."
        },
        {
          id: "25-8-5",
          question: "Which transport layer protocol does BGP use for communication between peers?",
          options: [
            "TCP",
            "UDP",
            "QUIC",
            "ICMP"
          ],
          answer: 0,
          solution: "Border Gateway Protocol (BGP) uses TCP (Transmission Control Protocol) for communication between peers at port number 179."
        },
        {
          id: "25-8-6",
          question: "Consider the following topology of a network. Numbers labeled in the link between two routers represent cost. Using the Distance Vector algorithm, identify the updated distance vector at Router A after the first round of updates.",
          options: [
            "A: 0, B: 3, C: 1, D: 4, E: 2",
            "A: 0, B: 3, C: 4, D: 4, E: 5",
            "A: 0, B: 3, C: 1, D: 4, E: 5",
            "A: 0, B: 3, C: 4, D: 4, E: 2"
          ],
          answer: 1,
          solution: "Router A receives the distance vectors from B and D and updates its distance vector accordingly."
        },
        {
          id: "25-8-7",
          question: "The Link State Routing Algorithm is/are NOT concerned with-",
          options: [
            "It shares the routing table rather than sending the information about its neighborhood only.",
            "Each router computes the shortest paths to all independently using Dijkstra's algorithm.",
            "Each router does not have a complete view of the network topology.",
            "Once a router has detected a local link failure, it generates and floods a new LSP that no longer contains the failed link and the new LSP replaces the previous LSP in the network."
          ],
          answer: [0, 2],
          solution: "The Link State Routing Algorithm is a type of routing algorithm used in computer networks to determine the shortest path from a source node to all other nodes in the network."
        },
        {
          id: "25-8-8",
          question: "Match the following-\nA. BGP local traffic\nB. Stub AS\nC. BGP transit traffic\nD. Multihomed AS",
          options: [
            "A-1, B-4, C-2, and D-3",
            "A-2, B-3, C-1, and D-4",
            "A-2, B-4, C-1, and D-3",
            "A-1, B-2, C-3, and D-4"
          ],
          answer: 0,
          solution: "Local traffic in BGP refers to data that starts or ends within an Autonomous System (AS). A Stub AS is an AS that has only one connection to the internet. Transit traffic occurs when an AS acts as a middleman. A Multihomed AS connects to multiple ISPs for redundancy and better performance."
        },
        {
          id: "25-8-9",
          question: "An ISP is assigned the CIDR block 192.168.0.0/16. Identify the valid subnet(s) among the following that can be allocated to its customers.",
          options: [
            "192.169.0.0/16",
            "192.168.0.0/17",
            "192.168.128.0/17",
            "192.168.0.0/18"
          ],
          answer: [1, 2, 3],
          solution: "CIDR ensures that the subnet mask doesn't extend beyond the /16 prefix, as this would fall outside the assigned block."
        },
        {
          id: "25-8-10",
          question: "What is the default value of TTL field in BGP packets in eBGP?",
          options: [
            "255",
            "1",
            "128",
            "64"
          ],
          answer: 1,
          solution: "In eBGP (External Border Gateway Protocol), the Time to Live (TTL) field in the IP header plays a crucial role in preventing routing loops and controlling the scope of BGP updates. By default, BGP packets have a TTL of 1 in eBGP."
        }
      ],
      "9": [
        {
          id: "25-9-1",
          question: "What is the primary purpose of a routing table in a router?",
          options: [
            "To store user credentials",
            "To log network traffic",
            "To maintain information about the routes to various network destinations",
            "To assign MAC addresses to devices"
          ],
          answer: 2,
          solution: "A routing table is a database in a router that contains information about the paths to various network destinations."
        },
        {
          id: "25-9-2",
          question: "What is the main disadvantage of using static routing?",
          options: [
            "High bandwidth usage",
            "Inability to adapt to network topology changes",
            "Complex configuration for small networks",
            "Requires a routing protocol"
          ],
          answer: 1,
          solution: "Static routing involves manually configuring routes, making it inflexible."
        },
        {
          id: "25-9-3",
          question: "Which switching fabric mechanism is most scalable for high-speed routers handling large volumes of traffic?",
          options: [
            "Shared bus",
            "Crossbar switch",
            "Memory-based switching",
            "Circuit switching"
          ],
          answer: 1,
          solution: "Crossbar switches provide parallel paths between input and output ports, allowing multiple packets to be forwarded simultaneously."
        },
        {
          id: "25-9-4",
          question: "In the context of router architecture, what does 'line card' refer to?",
          options: [
            "Component that connects routers to electrical power supplies.",
            "A hardware module containing input and output ports.",
            "A software routine for managing forwarding tables.",
            "A routing protocol used to configure static routes."
          ],
          answer: 1,
          solution: "A line card is a hardware module in a router that houses input and output ports for packets."
        },
        {
          id: "25-9-5",
          question: "If a router receives a new routing update from a protocol like OSPF, where is this information first stored?",
          options: [
            "In the FIB",
            "In the MAC address table",
            "In the RIB",
            "In the ARP table"
          ],
          answer: 2,
          solution: "The RIB stores routing updates from routing protocols such as OSPF, and then, based on those updates, the best routes are selected and forwarded to the FIB."
        },
        {
          id: "25-9-6",
          question: "Which of the following is not a core principle of Software-Defined Networking (SDN)?",
          options: [
            "Centralized control of the network through a controller",
            "Dynamic configuration of network devices without manual intervention",
            "Tight coupling of data plane and control plane",
            "The ability to programmatically define network behavior"
          ],
          answer: 2,
          solution: "In SDN, the control plane is decoupled from the data plane to allow for centralized management, making the network more flexible and programmable."
        },
        {
          id: "25-9-7",
          question: "Which of the following is a major benefit of OpenFlow in SDN?",
          options: [
            "OpenFlow does not allow network applications to run over the connected devices.",
            "OpenFlow allows for granular control over the flow of packets.",
            "OpenFlow is primarily used to monitor network security.",
            "OpenFlow increases network congestion by adding overhead."
          ],
          answer: 1,
          solution: "OpenFlow enables granular control of packet flows and allows for dynamic adjustments to the forwarding behavior of network devices."
        },
        {
          id: "25-9-8",
          question: "Which of the following best describes the 'Southbound API' in an SDN architecture?",
          options: [
            "It facilitates communication between the SDN controller and network applications.",
            "It manages communication between the control plane and data plane, typically using protocols like OpenFlow.",
            "It connects the SDN controller with other controllers in a multi-controller setup.",
            "It is used to monitor the health of the physical devices in the network."
          ],
          answer: 1,
          solution: "The 'Southbound API' connects the SDN controller with the data plane (switches/routers), enabling communication with network devices using protocols such as OpenFlow."
        },
        {
          id: "25-9-9",
          question: "Which of the following is an example of a 'Northbound API' in SDN?",
          options: [
            "OpenFlow",
            "OVSDB",
            "NETCONF",
            "RESTful API"
          ],
          answer: 3,
          solution: "'Northbound APIs' are used to enable communication between the SDN controller and network applications. RESTful APIs are a common example of northbound APIs."
        },
        {
          id: "25-9-10",
          question: "In a multi-controller SDN setup, what mechanism is commonly used to ensure consistent state across controllers?",
          options: [
            "Flow migration",
            "Controller federation",
            "Dynamic flow recalculation",
            "Multi-path routing"
          ],
          answer: 1,
          solution: "In a multi-controller SDN setup, controller federation is used to ensure that multiple controllers can work together, share information, and maintain a consistent state across the entire network."
        }
      ],
      "10": [
        {
          id: "25-10-1",
          question: "The CSMA/CD protocol, predominantly used in Ethernet, addresses which of the following challenges?",
          options: [
            "Efficient encoding and decoding of data signals",
            "Synchronization of devices in wireless networks.",
            "Detection and management of data collisions in shared media networks.",
            "Guaranteeing data delivery across multiple broadcast domains."
          ],
          answer: 2,
          solution: "The CSMA/CD protocol ensures efficient use of shared media by detecting collisions and managing retransmissions."
        },
        {
          id: "25-10-2",
          question: "Which MAC technique is most suitable for bursty traffic with sporadic transmissions?",
          options: [
            "Synchronous MAC with reserved slots.",
            "Asynchronous MAC with round-robin allocation.",
            "Token passing in ring topology.",
            "Contention-based asynchronous MAC."
          ],
          answer: 3,
          solution: "Contention-based asynchronous MAC is ideal for sporadic, short transmissions like those typical of interactive terminal-host traffic."
        },
        {
          id: "25-10-3",
          question: "In Go-Back-N ARQ, why must the size of the sender's window be less than 2^m, where m is the number of bits in the sequence number?",
          options: [
            "To prevent out-of-order frames from being accepted by the receiver",
            "To allow cumulative acknowledgments to function correctly",
            "To ensure the receiver's window size can accommodate all pending frames",
            "To avoid ambiguities in the sequence numbers during retransmission"
          ],
          answer: 3,
          solution: "If the window size were equal to or greater than 2^m, the same sequence numbers could be reused before the acknowledgment for earlier frames is received, causing confusion at the receiver."
        },
        {
          id: "25-10-4",
          question: "What is the minimum frame size for Ethernet (IEEE 802.3), and why is it important?",
          options: [
            "46 bytes, to prevent collisions from being detected too late",
            "64 bytes, to ensure collision detection within the frame transmission time.",
            "512 bytes, to maximize bandwidth efficiency.",
            "1500 bytes, to support large data payloads."
          ],
          answer: 1,
          solution: "If the frame size were smaller than 64 bytes, it is possible for the transmission to complete before a collision is detected, leading to undetected collisions and corrupted data."
        },
        {
          id: "25-10-5",
          question: "In a Selective Repeat ARQ system with a 4-bit sequence number and a sender's window size of 8, what is the minimum size of the receiver's buffer to prevent loss of out-of-order frames?",
          options: [
            "4",
            "8",
            "16",
            "1"
          ],
          answer: 1,
          solution: "Selective Repeat ARQ, the sender's and receiver's window sizes are equal and must be at most half of 2^m, where m=4. 2^m/2=16/2=8. The receiver's buffer size must equal the sender's window size to store out-of-order frames."
        },
        {
          id: "25-10-6",
          question: "A wireless CSMA/CA network uses a backoff algorithm with a contention window size that doubles after each collision. If the initial contention window size is 32, what is the maximum contention window size after 4 collisions?",
          options: [
            "256",
            "512",
            "128",
            "1024"
          ],
          answer: 1,
          solution: "After n collisions, the contention window size is Initial Size × 2^n. For n=4: 32 × 2^4=32 × 16=512."
        },
        {
          id: "25-10-7",
          question: "In a shared 75 kbps channel, each station transmits a 20-bit frame every 2000 ms. If the network uses Slotted Aloha, what is the maximum number of stations that can be supported?",
          options: [
            "7500",
            "2775",
            "7000",
            "5000"
          ],
          answer: 1,
          solution: "Transmission rate per station = 20 bits / 2000 ms = 10 bits/s. The number of stations N = 75 kbps / 10 bits/s = 7500. Slotted Aloha has an efficiency of 1/e, or approximately 0.37. The effective number of stations that can be supported is: N_effective = 7500 × 0.37 = 2775."
        },
        {
          id: "25-10-8",
          question: "Consider a CSMA/CD network where the frame transmission time T_f is much larger than the propagation delay t_p. Which of the following factors affect the efficiency of the network?\n(i) Frame size.\n(ii) Propagation delay t_p.\n(iii) Backoff time after a collision.\n(iv) Total number of stations.",
          options: [
            "(i), (ii) and (iii)",
            "(ii), (iii) and (iv)",
            "All are True",
            "All are False"
          ],
          answer: 2,
          solution: "Frame Size: Larger frames improve efficiency by reducing overhead.\nPropagation Delay (t_p): Higher delay increases collision probability, reducing efficiency.\nBackoff Time: Longer backoff after collisions leads to idle time, lowering efficiency.\nTotal Number of Stations: More stations increase contention and collisions, reducing efficiency."
        },
        {
          id: "25-10-9",
          question: "In a round-robin MAC technique, a network has 10 stations, and each station gets a time slot of 2 ms. If a station has a data frame of 2 KB to transmit, and the transmission rate is 1 Mbps, how many rounds will it take for the station to complete its transmission?",
          options: [
            "4",
            "8",
            "16",
            "20"
          ],
          answer: 1,
          solution: "Time to transmit 2 KB (16 Kb) at 1 Mbps: (16 Kb / 1 Mbps) = 16 ms\nNumber of time slots needed of each 2 ms: (16 / 2) = 8\nNumber of rounds (10 stations = 10 slots per round): 8 slots / (1 slot per round) = 8"
        },
        {
          id: "25-10-10",
          question: "A network administrator is analyzing a collision on a traditional Ethernet network using CSMA/CD. They observe the following sequence:\n(i) A node transmits a frame after sensing the medium is free.\n(ii) A collision occurs, detected by voltage fluctuations.\n(iii) A jam signal is transmitted, and the node applies a backoff algorithm.\nIf the backoff limit is reached without successful transmission, what should the node do next?",
          options: [
            "Retry immediately without further sensing.",
            "Send another jam signal and continue to backoff indefinitely.",
            "Abort the transmission and report a failure.",
            "Switch to a synchronous MAC protocol."
          ],
          answer: 2,
          solution: "If the backoff limit is exceeded in CSMA/CD, the node aborts the transmission and reports a failure."
        }
      ],
          "11": [
            {
              id: "25-11-1",
              question: "Address Resolution Protocol (ARP) is primarily concerned with:",
              options: [
                "To resolve IP addresses to MAC addresses.",
                "To resolve hostnames to IP addresses.",
                "To resolve port numbers to IP addresses.",
                "To resolve MAC addresses to IP addresses."
              ],
              answer: 0,
              solution: "The Address Resolution Protocol (ARP) is a protocol used for discovering the link layer address, such as a MAC address, associated with a given IPv4 address."
            },
            {
              id: "25-11-2",
              question: "Identify the WRONG statement in the following:",
              options: [
                "BOOTP is a legacy protocol used to assign IP addresses and other configuration information to devices during startup.",
                "BOOTP evolved from DHCP to support dynamic IP addressing and reusable addresses.",
                "Both DHCP and BOOTP serve the purpose of providing IP addresses and configurations to devices.",
                "None of them."
              ],
              answer: 1,
              solution: "DHCP evolved from BOOTP to support dynamic IP addressing and reusable addresses."
            },
            {
              id: "25-11-3",
              question: "Which port number does DHCP use for client-server communication at layer 2?",
              options: [
                "TCP 80",
                "UDP 67 & 68",
                "UDP 80 & 81",
                "UDP 23"
              ],
              answer: 1,
              solution: "DHCP client uses UDP 68 and DHCP server uses UDP 67 during communication."
            },
            {
              id: "25-11-4",
              question: "Which protocol is used to prevent bridge loops in an Ethernet network?",
              options: [
                "Point-To-Point Protocol (PPP)",
                "Dynamic Host Configuration Protocol (DHCP)",
                "Address Resolution Protocol (ARP)",
                "Spanning Tree Protocol (STP)"
              ],
              answer: 3,
              solution: "Spanning Tree Protocol (STP) is specifically designed to prevent bridge loops in Ethernet networks by creating a loop-free topology. It ensures that there is always one active path between any two devices on a network while blocking redundant paths that could cause loops."
            },
            {
              id: "25-11-5",
              question: "Which feature is/are concerned with trunk links in VLAN-based networks?\nI. It can carry data from multiple VLANs over a single physical connection.\nII. It allows VLANs to span across multiple switches, enabling seamless communication for devices in the same VLAN, even if they are connected to different switches.",
              options: [
                "Only (I)",
                "Only (II)",
                "Both (I) and (II)",
                "Neither (I) nor (II)"
              ],
              answer: 2,
              solution: "Trunk links are a foundational component of modern VLAN-based networks, providing a scalable, efficient, and versatile way to manage and transport VLAN traffic across the network. These types of ports are usually found in connections between switches. These links require the ability to carry packets from all available VLANs because VLANs span over multiple switches."
            },
            {
              id: "25-11-6",
              question: "Which provides a solution to the hidden terminal problem in wireless LANs?",
              options: [
                "RTS/CTS mechanism",
                "Backoff timers",
                "Interframe Space (IFS)",
                "None of these."
              ],
              answer: 0,
              solution: "The hidden terminal problem is a common issue in Wireless Local Area Networks (WLANs) that arises when two or more devices (nodes) are within the communication range of a central access point (AP) but are not within the range of each other. Mechanisms like RTS/CTS and CSMA/CA, along with careful network planning, are essential to mitigate its effects and maintain efficient wireless communication."
            },
            {
              id: "25-11-7",
              question: "Given a wireless network using CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance), where the transmission time of a data frame is 200 ms. The contention window backoff time (in the event of a collision) always follows an exponential backoff mechanism, with a random backoff time selected from a range of 0 to 10 slots. Each slot is 10 ms. A collision happens, and the backoff time for retransmission is selected randomly within the range of 0 to 10 slots. What is the total time spent (in ms) for the first retransmission if the backoff time is randomly selected to be 7 slots? (Ignore the time spent in the first transmission attempt)",
              options: [
                "200 ms",
                "250 ms",
                "260 ms",
                "270 ms"
              ],
              answer: 3,
              solution: "Transmission time of the data frame: 200 ms\nBackoff time range: 0 to 10 slots\nSlot duration: 10 ms\nBackoff time randomly selected: 7 slots\nBackoff Time = 7 slots × 10 ms/slot = 70 ms\nTotal time spent: Original transmission time + Backoff time = 200 ms + 70 ms = 270 ms."
            },
            {
              id: "25-11-8",
              question: "In which layer does Spanning Tree Protocol (STP) work?",
              options: [
                "Layer 2",
                "Layer 3",
                "Layer 4",
                "Layer 5"
              ],
              answer: 0,
              solution: "Spanning Tree Protocol (STP) is a protocol that prevents Layer 2 loops or bridging loops by computing a tree structure of nodes in a network."
            },
            {
              id: "25-11-9",
              question: "The configuration of a DHCP server is as follows:\nNetwork Address: 192.0.1.0/24\nReserved Addresses: 192.0.1.1 to 192.0.1.20 (for routers and servers)\nHow many addresses are available for clients?",
              options: [
                "256",
                "255",
                "234",
                "231"
              ],
              answer: 2,
              solution: "Total addresses available in /24 network is 2^8 = 256.\nNetwork address = 192.0.1.0\nBroadcast address = 192.0.1.255\nReserved IP = 192.0.1.1 to 192.0.1.20 = 20\nTotal IP addresses available for clients = 256 - (1 + 20 + 1) = 234"
            },
            {
              id: "25-11-10",
              question: "Match the following:\nA. Ethernet Working Group\nB. Mesh Networking\nC. Wi-Fi in TV spectrum white spaces\nD. Power control\nE. Handover",
              options: [
                "A-3, B-5, C-2, D-1, E-4",
                "A-3, B-5, C-2, D-4, E-4",
                "A-3, B-5, C-2, D-1, E-1",
                "A-3, B-5, C-2, D-4, E-1"
              ],
              answer: 3,
              solution: "The 802.3 standard defines Ethernet, as the most widely used wired LAN technology. The 802.11s standard defines mesh networking, allowing Wi-Fi devices to form self-configuring, multi-hop networks without a central access point. The 802.11af standard enables Wi-Fi operation in unused TV spectrum bands (white spaces) for better coverage and signal penetration. The 802.11h standard introduces transmit power control (TPC) and dynamic frequency selection (DFS) to comply with European radio regulations. The 802.11f standard was a recommendation for inter-access point communication to facilitate handover (roaming) between Wi-Fi APs."
            }
          ],
          "12": [
            {
              id: "25-12-1",
              question: "In which layer of the OSI model does the HTTP (Hypertext Transfer Protocol) operate?",
              options: [
                "Transport Layer",
                "Network Layer",
                "Application Layer",
                "Data Link Layer"
              ],
              answer: 2,
              solution: "HTTP (Hypertext Transfer Protocol) is a protocol used for web communication. It belongs to the Application Layer, which provides network services like email (SMTP, POP3), file transfer (FTP), and web browsing (HTTP, HTTPS)."
            },
            {
              id: "25-12-2",
              question: "Which of the following best describes 'Manchester Encoding'?",
              options: [
                "A method that encodes data using transitions at the beginning of each bit period.",
                "A self-clocking encoding technique with a transition in the middle of each bit period.",
                "A signaling method that uses voltage levels directly to represent 1s and 0s.",
                "An encoding technique that combines multiple signals into one."
              ],
              answer: 1,
              solution: "Manchester Encoding ensures synchronization by placing a transition in the middle of each bit period: from low to high for a '1' and high to low for a '0.' It is self-clocking, making it suitable for high-reliability communication."
            },
            {
              id: "25-12-3",
              question: "A time-division multiplexing (TDM) link transmits 4,000 frames per second, with each time slot containing 8 bits. What is the transmission rate of this TDM circuit?",
              options: [
                "32 kbps",
                "500 bps",
                "500 kbps",
                "32 bps"
              ],
              answer: 0,
              solution: "Transmission rate = frame rate × number of bits in a slot.\nGiven: Frame rate = 4000/sec and number of bits in slot = 8\nThus, Transmission rate = (4000 × 8) bps = 32000 bps = 32 kbps"
            },
            {
              id: "25-12-4",
              question: "What is the main difference between Manchester and Differential Manchester encoding?",
              options: [
                "Differential Manchester requires more bandwidth",
                "Differential Manchester uses a transition for every 1-bit",
                "Manchester encoding has no transitions at all",
                "Manchester encoding is only used in analog signals"
              ],
              answer: 1,
              solution: "Manchester encoding:\n0 → High to Low transition at the middle of the bit\n1 → Low to High transition at the middle of the bit\nDifferential Manchester encoding:\nEvery bit starts with a transition\n1 → No transition at the middle\n0 → Transition at the middle"
            },
            {
              id: "25-12-5",
              question: "In Phase Shift Keying (PSK), how is information transmitted?",
              options: [
                "By varying the frequency of the carrier signal",
                "By varying the amplitude of the carrier signal",
                "By varying the phase of the carrier signal",
                "By varying both amplitude and phase of the carrier signal"
              ],
              answer: 2,
              solution: "In PSK, information is transmitted by altering the phase of the carrier signal."
            },
            {
              id: "25-12-6",
              question: "A channel has a capacity of 1 Mbps and an SNR of 9. If the SNR is halved, what happens to the channel capacity?",
              options: [
                "It remains the same.",
                "It is reduced by exactly 50%.",
                "It is reduced by less than 50%.",
                "It is reduced to zero."
              ],
              answer: 2,
              solution: "Initial capacity: C = B × log2(1 + SNR)\nWhen SNR = 9: C1 = B × log2(1 + 9) = B × log2(10)\nWhen SNR = 4.5: C2 = B × log2(1 + 4.5) = B × log2(5.5)\nCapacity ratio: C2/C1 = log2(5.5) / log2(10) = 2.46 / 3.32 = 0.74\nThe capacity is reduced to 74% of its original value, which is less than a 50% reduction."
            },
            {
              id: "25-12-7",
              question: "What is the primary limitation of NRZ-L when used over long distances?",
              options: [
                "Increased signal distortion at high frequencies.",
                "Difficulty in handling multiple voltage levels.",
                "Poor synchronization for long sequences of 0s or 1s.",
                "Requires higher power for transmission."
              ],
              answer: 2,
              solution: "For long sequences of 0s or 1s, the constant voltage in NRZ-L results in no transitions, making it challenging for the receiver to maintain synchronization with the transmitter."
            },
            {
              id: "25-12-8",
              question: "Which of the following statements is true for FSK modulation?",
              options: [
                "It is more bandwidth-efficient than QPSK.",
                "It is inherently immune to noise.",
                "It is suitable for applications requiring constant envelope signals.",
                "It is always more power-efficient than QAM."
              ],
              answer: 2,
              solution: "FSK has a constant envelope, making it suitable for applications requiring power-efficient amplifiers, such as in wireless communications. However, it is less bandwidth-efficient than QPSK or QAM."
            },
            {
              id: "25-12-9",
              question: "Which of the following firewalls offers the highest level of security?",
              options: [
                "Packet-filtering firewall",
                "Stateful firewall",
                "Proxy firewall",
                "NAT firewall"
              ],
              answer: 2,
              solution: "Proxy firewalls offer the highest level of security by acting as an intermediary between users and the internet. They prevent direct connections, filter malicious traffic, and provide content inspection, logging, and authentication."
            },
            {
              id: "25-12-10",
              question: "A firewall rule that permits outgoing HTTP traffic but denies all incoming traffic except for established connections operates under which principle?",
              options: [
                "Default allow",
                "Default deny",
                "Least privilege",
                "Fail-safe defaults"
              ],
              answer: 1,
              solution: "This rule operates under the default deny principle, where all traffic is denied unless explicitly permitted (e.g., outgoing HTTP and established connections)."
            }
          ]
        }
    };
export default questionsData;